from django.db import models
from django.forms import CharField


class Address(models.Model):
    street_address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zipcode = models.IntegerField()


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phone_number = models.IntegerField(blank=False)
    user_id = models.IntegerField()
    address = models.OneToOneField(
        Address, null=True, on_delete=models.SET_NULL, blank=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    order_date = models.DateField(auto_now=True)

    def get_total(self):
        total = 0
        orderItems = self.orderitem_set.all()
        for item in orderItems:
            total += item.get_final_price
        return total


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    product = models.OneToOneField(
        'Product', on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(null=True)

    def get_total_item_price(self):
        return self.product.price * self.quantity

    def get_final_price(self):
        discount = 1 - self.product.discount
        return self.get_total_item_price * discount


def upload_path(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Product(models.Model):

    CATEGORY_CHOICES = [
        ('gr', "Group Buy"),
        ('mr', "Merch")
    ]

    def upload_path(self, instance, filename):
        return '/'.join(['products', str(instance.name), filename])

    name = models.CharField(max_length=200, null=True)
    description = models.CharField(max_length=200, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    delivered = models.BooleanField(default=False, null=True, blank=False)
    image = models.ImageField(null=True, blank=True, upload_to=upload_path)
    size = models.CharField(max_length=200, null=True)
    color = models.CharField(max_length=200, null=True)
    discount = models.DecimalField(max_digits=2, decimal_places=2)
    category = models.CharField(
        max_length=2, choices=CATEGORY_CHOICES, default='mr')
    category = models.CharField(
        max_length=2, choices=CATEGORY_CHOICES, default='mr')


class RentalItem(models.Model):
    item = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True)
    style = CharField(max_length=200)
    image = models.ImageField(null=True)
    number_avaliable = models.IntegerField()
