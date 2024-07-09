# Create your views here.
from rest_framework import permissions,viewsets
from .models import Customer,Product,ProductCategory,Cart,Order,OTPRecord
from .serializers import CustomerSerializer,ProductSerializer,CategorySerializer,CartSerializer,OrderSerializer,OTPRecordSerializer
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail
import random
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.contrib.auth.models import User
from django.shortcuts import HttpResponse
from rest_framework.response import Response


class OTPViewSet(viewsets.ModelViewSet):
    queryset=OTPRecord.objects.all()
    serializer_class=OTPRecordSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer


from .models import OTPRecord
from datetime import timedelta
from django.utils import timezone

@csrf_exempt
@api_view(['POST'])
def send_mail_view(request):
    name = request.data.get('Name')
    email = request.data.get('Email')
    if email:
        try:
            generated_otp = str(random.randint(1000, 9999))
            message = f"{name}, your OTP code: {generated_otp}"
            from_email = 'smartxcodeotp@gmail.com'
            recipient_list = [email]

            send_mail(
                'OTP Verification',
                message,
                from_email,
                recipient_list,
                fail_silently=False,
            )

            #Store the OTP in the database
            otp_record = OTPRecord.objects.create(
                email=email,
                otp=generated_otp,
                expires_at=timezone.now() + timedelta(minutes=5)
            )
            otp_record.save()
            request.session['otp']=generated_otp
            print(request.session.get('otp'))

            return JsonResponse({"success": True, "otp": generated_otp})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=500)
    else:
        return JsonResponse({"success": False, "error": "Email is required"}, status=400)
def xyz(request):
    # Retrieve the OTP value from the session
    otp_value = request.session.get('otp')  # Replace 'otp_key' with the actual key used to store the OTP

    if otp_value:
        # OTP value is found in the session
        # You can now use the otp_value in your view logic
        return HttpResponse(f"OTP value retrieved from session: {otp_value}")
    else:
        # Handle the case when OTP data is not found in the session
        return HttpResponse("OTP value not found in session")

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset=ProductCategory.objects.all()
    serializer_class=CategorySerializer
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]


class CartViewSet(viewsets.ModelViewSet):
    queryset=Cart.objects.all()
    serializer_class=CartSerializer
    permission_classes=[permissions.IsAuthenticated]


class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer
    permission_classes=[permissions.IsAuthenticated]
