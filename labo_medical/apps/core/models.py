from django.db import models
from django.utils import timezone
from django.conf import settings
# from labo_medical.apps.medicalApp.models import Docter

# Create your models here.4
class BaseQweryset(models.QuerySet):
    def delete(self, **kwargs):
        return super().update(delete_at=timezone.now())

class BaseModelManager(models.Manager):
    def get_queryset(self):
        return BaseQweryset(self.model, using=self._db).filter(delete_at=None)



class BaseModel(models.Model):
    created_at = models.DateField(auto_created=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    udapte_at = models.DateField(auto_now_add=True)
    delete_at = models.DateField(blank=True, null=True)

    class Meta:
        abstract = True
    
    def delete(self):
        self.deleted_at = timezone.now()
        self.save()