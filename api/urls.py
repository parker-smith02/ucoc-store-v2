from django.urls import path
from . import views

urlpatterns = [
    path('api/getUsers', views.getUsers),
    path('api/getUserData/<int:id>', views.getSpecificUser),
    path('api/getProducts', views.getProducts)
]
