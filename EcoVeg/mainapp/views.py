# Create your views here.
from .serializers import CustomerSerializer,ProductSerializer,CategorySerializer,CartSerializer,OrderSerializer
from .models import Customer,Product,ProductCategory,Cart,Order
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions,viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import HttpResponse
from django.core.mail import send_mail
from django.http import JsonResponse
import random




class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer


a=0
@csrf_exempt
@api_view(['POST'])
def send_mail_view(request):
    Name = request.data.get('Name')
    Email = request.data.get('Email')
    if Email:
        try:
            generated_otp = str(random.randint(1000, 9999))
            global a
            a = generated_otp
            subject = "Verify Your Account - OTP Verification"
            message = f"""
Dear {Name},

Thank you for registering with us. To complete the verification of your account, please use the following One-Time Password (OTP):
                
Your OTP is: {generated_otp}
                
Please enter this OTP on the verification page to confirm your account. This OTP is valid for the next 2 minutes.
If you did not request this OTP or have any concerns, please contact our support team immediately.
    
Thank you for choosing our service!

Best Regards,
EcoVeg Support Team
            """
            email_from = 'smartxcodeotp@gmail.com'
            recipient_list = [Email]
            send_mail(subject, message, email_from, recipient_list, fail_silently=False)
            return JsonResponse({"success": True, "otp": generated_otp})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=500)
    else:
        return JsonResponse({"success": False, "error": "Email is required"}, status=400)

@api_view(['GET','POST'])
def verify_otp(request):
    global a
    return Response({'otp':a})
    
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
