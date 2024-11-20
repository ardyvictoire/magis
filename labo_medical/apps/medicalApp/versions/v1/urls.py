from django.urls import path
from . import views

urlpatterns = [

    # all urls for register in databases
    path('send_client_exist/<int:pk>', views.send_client_exist, name = 'send_client_exist'),
    path("inscription_admin", views.Docter_Direct_Inscription,   name="user_inscription"),
    path("laboratin_register/", views.medecin_Register, name="medecin_Register"),
    path("client_register/", views.client_Register, name="client_Register"),
    path("examen_register/", views.examen_register, name="examen_register"),
    path("resultat_register/", views.resultat_Register, name="resultat_Register"),
    path("ordonnance_register/", views.ordonnance_register, name="ordonnance_register"),
    path("comment_register/", views.comment_register, name="comment_register"),
    path('speciality_register', views.speciality_register, name='speciality_register'),


    # all urls for login 
    path("conexion_admin", views.login_user, name="login_DirecDocter"),
    path("", views.medecin_login, name="medecin_login"),


    # logout
    path("logout_dirDoct", views.deconnexion, name="deconnexion"),
    path("Logout_laborat/", views.medecin_logout, name="medecin_logout"),



    # all urls for get data in databases
    path('users/', views.all_users, name = "users"),
    path('user_labo', views.all_users_labo, name="user_labo"),

    path("direct_docter", views.direct_docter_data, name = "direct_docter"),
    path("client/", views.client_data, name="client"),
    path("comment/", views.comment_data, name="comments"),
    path("examen/", views.examen_data, name="examens"),
    path("laboratory/", views.laboratory_data, name="laboratory"),
    path("ordonnance/", views.ordonnance_data, name="ordonnances"),
    path("result/", views.result_data, name="results"),
    path('speciality/', views.speciality, name = 'speciality'),



    # all urls for delete data in databases
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




    # all urls for update data in databases

]

