from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'theme', views.ThemeViewSet)
router.register(r'qna', views.QnAViewSet)

urlpatterns = [
    path('default/', views.index, name='index'),
    path('', include(router.urls)),
    path('qna-multiple/', views.multiqna, name='multiqna'),
]