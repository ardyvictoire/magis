"""
URL configuration for labo_medical project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path


from labo_medical.apps.medicalApp import views
from labo_medical.apps.api.views import UserLogin, UserRegister
# from labo_medical.apps.api.views import UserRegister

urlpatterns = [
    path("admin/", admin.site.urls),
    # les urls pour Medecin Directeur
    path("inscription_admin", views.inscription_MD, name="inscription_MD"),
    path("conexion_admin", views.connexion_MD, name="connexion_MD"),
    path("deconnexion", views.deconnexion, name="deconnexion"),
    path("homme_page", views.homme_page, name="homme_page"),
    # les urls Laboratoire
    path("", views.medecin_login, name="medecin_login"),
    path("Logout/medecin/", views.medecin_logout, name="medecin_logout"),
    # Les urls pour l'enregistrement des examens
    path("Medecin_Register/", views.medecin_Register, name="medecin_Register"),
    path("Client_Register/", views.client_Register, name="client_Register"),
    path("Examen_register/", views.examen_register, name="examen_register"),
    path("Resultat_Register/", views.resultat_Register, name="resultat_Register"),
    path("ordonnance_register/", views.ordonnance_register, name="ordonnance_register"),
    path("Comment_register/", views.comment_register, name="comment_register"),

    # LES URLS POURS LES PAGES DE L'APPLICA
    path("client_data/", views.client_data, name="client_data"),
    path("comment_data/", views.comment_data, name="comment_data"),
    path("examen_data/", views.examen_data, name="examen_data"),
    path("medecin_data/", views.medecin_data, name="medecin_data"),
    path("ordonnance_data/", views.ordonnance_data, name="ordonnance_data"),
    path("result_data/", views.result_data, name="result_data"),

    # delete Data
    path("delete/<int:id>/", views.delete_date, name="delete_data"),
    path(
        "delete_data_comment/<int:id>/",
        views.delete_data_comment,
        name="delete_data_comment",
    ),
    path(
        "delete_data_ordonn/<int:id>/",
        views.delete_data_ordonn,
        name="delete_data_ordonn",
    ),
    path(
        "delete_data_examen/<int:id>/",
        views.delete_data_examen,
        name="delete_data_examen",
    ),
    path(
        "delete_data_result/<int:id>/",
        views.delete_data_result,
        name="delete_data_result",
    ),

    # url for token_auth
    path("registerToken/", UserRegister.as_view())
]
