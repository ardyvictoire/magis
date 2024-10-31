from django.db import models
# from labo_medical.apps.medicalApp.models import Docter

# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateField(auto_now_add=True)
    # created_by = models.ForeignKey(null=True)
    udapte_at = models.DateField(auto_now=True)
    delete_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True