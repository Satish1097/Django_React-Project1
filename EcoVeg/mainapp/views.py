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



class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer


@csrf_exempt
@api_view(['POST'])
def send_mail_view(request):
    email = request.data.get('Email')
    if email:
        try:
            generated_otp = str(random.randint(1000, 9999))
            message = f"Your OTP code: {generated_otp}"
            from_email = 'smartxcodeotp@gmail.com'
            recipient_list = [email]

            send_mail(
                'OTP Verification',
                message,
                from_email,
                recipient_list,
                fail_silently=False,
            )
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


