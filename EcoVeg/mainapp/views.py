# Create your views here.
from rest_framework import permissions,viewsets
from .models import Customer,Product,ProductCategory,Cart,Order
from .serializers import CustomerSerializer,ProductSerializer,CategorySerializer,CartSerializer,OrderSerializer
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail
import random
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.contrib.auth.models import User



class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer


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
            request.session['otp'] = generated_otp
            request.session.save()
            return JsonResponse({"success": True, "otp": generated_otp})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=500)
    else:
        return JsonResponse({"success": False, "error": "Email is required"}, status=400)


@csrf_exempt
@api_view(['POST'])
def verify_otp_view(request):
    print(request.data)

    email = request.data.get('Email')
    otp = request.data.get('OTP')
    print(request.session.get('otp'))

    if email and otp:
        # Retrieve the stored OTP from the session or database
        stored_otp = request.session.get('otp')
        if otp == stored_otp:
            return JsonResponse({"success": True, "message": "User created successfully"})
        else:
            return JsonResponse({"success": False, "error": "Invalid OTP"}, status=400)
    else:
        return JsonResponse({"success": False, "error": "Email and OTP are required"}, status=400)

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


