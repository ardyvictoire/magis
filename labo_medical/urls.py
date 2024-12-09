from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


# from labo_medical import views
from labo_medical.apps.api.views import *

urlpatterns = [

    path("admin/", admin.site.urls),
    # path("me/", views.medecin_login, name="medecin_login"),
    path('medical_lab/', include('labo_medical.apps.medicalApp.versions.v1.urls')),
    path('api', include('labo_medical.apps.api.versions.v1.urls')),

] + static(settings.MEDIA_URL, 
document_root=settings.MEDIA_ROOT
)
