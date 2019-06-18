from django.contrib import admin

from cars.models.car import Car

class CarAdmin(admin.ModelAdmin):
    list_display = ('brand', 'model', 'year', 'created', 'modified')

admin.site.register(Car, CarAdmin)
