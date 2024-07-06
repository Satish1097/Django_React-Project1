from django.db import models

class Customer(models.Model):
    Name=models.CharField(max_length=50)
    Email=models.EmailField()
    Contact=models.CharField(max_length=10)
    Image=models.ImageField(upload_to='images/', default='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=')
    Password=models.CharField(max_length=100)

    def __str__(self):
        return self.Name
    
class ProductCategory(models.Model):
    Category=models.CharField(max_length=100)
    Image=models.ImageField(default="")

    def __str__(self):
        return self.Category
class Product(models.Model):
    P_Name=models.CharField( max_length=50)
    P_Desc=models.CharField(max_length=100)
    P_Price=models.IntegerField()
    Discounted_Price=models.IntegerField()
    P_Image=models.ImageField(upload_to='images/')
    P_Category=models.ForeignKey(ProductCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.P_Name
    
class Cart(models.Model):
    ProductDetail=models.ForeignKey(Product,on_delete=models.CASCADE)
    CustomerDetail=models.ForeignKey(Customer,on_delete=models.CASCADE)
    Quantity=models.IntegerField()
    def __str__(self):
        return self.CustomerDetail.Name

class Order(models.Model):
    ProductDetail=models.ForeignKey(Product,on_delete=models.CASCADE)
    CustomerDetail=models.ForeignKey(Customer,on_delete=models.CASCADE)
    Status=models.CharField(max_length=20)

    def __str__(self):
        return self.CustomerDetail.Name
# Create your models here.
