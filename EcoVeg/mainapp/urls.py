from . import views
from django.urls import path,include


from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'customers',views.CustomerViewSet)
router.register(r'products',views.ProductViewSet)
router.register(r'categories',views.CategoryViewSet)
router.register(r'orders',views.OrderViewSet)
router.register(r'cart',views.CartViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('verify-otp',views.verify_otp),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('send_mail_view/',views.send_mail_view, name='send_mail_view'),
]
