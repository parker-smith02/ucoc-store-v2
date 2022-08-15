from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('shop', views.index),
    path('groupbuys', views.index),
    path('rentgear', views.index),
    path('requestatrip', views.index),
]
