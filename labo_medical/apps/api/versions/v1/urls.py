from django.urls import path
from .views import *

urlpatterns = [

    # path("admin/", admin.site.urls),
    # path('medical_lab/', include('labo_medical.apps.medicalApp.versions.v1.urls')),
    # path('api', include('labo_medical.apps.api.versions.v1.urls')),

    



    # url for token_auth
    path(
        "registerToken/", 
        UserRegister.as_view()
    ),
    path(
        "loginToken/", 
        UserLogin.as_view()
    ),

    # list data URLs and Register
    path(
        "speciality_registeOrList/", 
        SpecialityRegisterAndList.as_view()
    ),

    path(
        "docter_registeOrList/", 
        DocterRegisterAndList.as_view()
    ), 

    path(
        "client_register_or_List/", 
        ClientRegisterAndList.as_view()
    ),



    # restrict Update and destroy in API

    path(
        'speciality/<int:pk>/', 
        SpecialityRestrictUpdateDester.as_view(), 
    ),

    path(
        'docter/<int:pk>/', 
        DocterRestrictupdateDestr.as_view(), 
    ),

    path(
        'client/<int:pk>/', 
        ClientRestrictupdateDestr.as_view(), 
    ),

    path(
        'examen/<int:pk>/', 
        ExamRestrictupdateDestr.as_view(), 
    ),

    path(
        'result/<int:pk>/', 
        ResultRestrictupdateDestr.as_view(), 
    ),

    path(
        'comment/<int:pk>/', 
        CommetRestrictupdateDestr.as_view(), 
    ),

    path(
        'ordonnanc/<int:pk>/', 
        OrdonnancRestrictupdateDestr.as_view(), 
    ),

]
