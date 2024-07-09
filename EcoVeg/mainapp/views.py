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
from django.shortcuts import HttpResponse
from rest_framework.response import Response




class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer



@csrf_exempt
@api_view(['POST'])
def send_mail_view(request):
    Name = request.data.get('Name')
    Email = request.data.get('Email')
    Mobile=request.data.get('Mobile')
    Password=request.data.get('Password')
    if Email:
        try:
            generated_otp = str(random.randint(1000, 9999))
            message = f"{Name}, your OTP code: {generated_otp}"
            from_email = 'smartxcodeotp@gmail.com'
            recipient_list = [Email]

            send_mail(
                'OTP Verification',
                message,
                from_email,
                recipient_list,
                fail_silently=False,
            )

            #Store the OTP in the database
            customer = Customer.objects.create(
                Name=Name,
                Email=Email,
                Mobile=Mobile,
                Password=Password,
                OTP=generated_otp
            )
            customer.save()
            return JsonResponse({"success": True, "otp": generated_otp})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=500)
    else:
        return JsonResponse({"success": False, "error": "Email is required"}, status=400)
    
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
