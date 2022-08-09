from django.urls import path
from . import views

urlpatterns = [
    path('getUsers/', views.getUsers),
    path('getUserData/<int:id>/', views.getSpecificUser),
    path('getProducts/', views.getProducts),
    path('uploadImage', views.AdminImageUpload),

]
