from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cars import views


router = routers.DefaultRouter()
router.register(r'cars', views.CarView, 'car')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
