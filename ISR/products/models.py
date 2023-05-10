from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=50)
    base_price = models.FloatField()
    created_date = models.DateTimeField()


class ProductCategory(models.Model):
    name = models.CharField(max_length=12)
    description = models.CharField(max_length=200)


class ProductPriceCategory(models.Model):
    price_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.FloatField()
