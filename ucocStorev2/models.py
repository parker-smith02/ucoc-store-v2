from django.db import models
from django.forms import CharField


class Address(models.Model):
    street_address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zipcode = models.IntegerField(max_digits=5)


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phone_number = models.IntegerField(max_digits=10, blank=False)
    address = models.ForeignKey(
        Address, on_delete=models.SET_NULL, null=True, blank=True)
    user_id = models.IntegerField(max_digits=10)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL)
    order_date = models.DateField(auto_now=True)

    def get_total(self):
        total = 0
        orderItems = self.orderitem_set.all()
        for item in orderItems:
            total += item.get_final_price
        return total


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL)
    product = models.OneToOneField('Product', on_delete=models.SET_NULL)
    quantity = models.IntegerField(max_digits=2)

    def get_total_item_price(self):
        return self.product.price * self.quantity

    def get_final_price(self):
        discount = 1 - self.product.discount
        return self.get_total_item_price * discount


class Product(models.Model):
    name = models.CharField(max_length=200, null=True)
    description = models.CharField(max_length=200, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    delivered = models.BooleanField(default=False, null=True, blank=False)
    image = models.ImageField(null=True, blank=True)
    size = models.CharField(max_length=200, null=True)
    color = models.CharField(max_length=200, null=True)
    discount = models.DecimalField(max_digits=2, decimal_places=2)


class RentalItem(models.Model):
    item = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True)
    style = CharField(max_length=200, null=True)
    image = models.ImageField(null=True, null=True)
    number_avaliable = models.IntegerField(max_digits=3)


class OrderItem(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.SET_NULL, blank=True, null=True)
