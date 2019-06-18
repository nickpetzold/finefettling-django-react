from django.shortcuts import render
from rest_framework import viewsets

from cars.models.car import Car
from cars.serializers import CarSerializer


class CarView(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = Car.objects.all()
