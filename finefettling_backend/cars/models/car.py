import datetime

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _


def current_year():
    return datetime.date.today().year

def max_value_current_year(value):
    return MaxValueValidator(current_year())(value)

class Car(models.Model):
    brand = models.CharField(_("brand"), max_length = 64)
    model = models.CharField(_("model"), max_length = 64)
    year = models.PositiveIntegerField(
        _("year"),
        default=current_year(),
        validators=[MinValueValidator(1920), max_value_current_year]
    )
    created = models.DateTimeField(_("created"), auto_now_add=True)
    modified = models.DateTimeField(_("modified"), auto_now=True)

    def __str__(self):
        return f"{self.brand} - {self.model} [{self.year}]"
