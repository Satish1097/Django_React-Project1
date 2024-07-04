# Create your views here.
from rest_framework import permissions,viewsets
from .models import Customer,Product,ProductCategory,Cart,Order
from .serializers import CustomerSerializer,ProductSerializer,CategorySerializer,CartSerializer,OrderSerializer
from rest_framework.permissions import IsAuthenticated


class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer
    permission_classes=[permissions.IsAuthenticated]


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes=[permissions.IsAuthenticated]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset=ProductCategory.objects.all()
    serializer_class=CategorySerializer
    permission_classes=[permissions.IsAuthenticated]


class CartViewSet(viewsets.ModelViewSet):
    queryset=Cart.objects.all()
    serializer_class=CartSerializer
    permission_classes=[permissions.IsAuthenticated]


class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer
    permission_classes=[permissions.IsAuthenticated]


