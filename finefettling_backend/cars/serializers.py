from rest_framework import serializers

from cars.models.car import Car


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'brand', 'model', 'year')
