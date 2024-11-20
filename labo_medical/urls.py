from django.contrib import admin
from django.urls import path, include


from labo_medical import views
from labo_medical.apps.api.views import *

urlpatterns = [

    path("admin/", admin.site.urls),
    path('medical_lab/', include('labo_medical.apps.medicalApp.versions.v1.urls')),
    path('api', include('labo_medical.apps.api.versions.v1.urls')),

]
