from django.contrib import admin

# from .models import Client, Comment, Exam, Docter, Ordonanc, Result, Speciality
from .models import *

# Register your models here.

# table for all user
@admin.register(User)
class User_table(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", 'username', "email", "matricule", "phone_numb", "adress", "birthday_date", "gender", "role", "password", "created_at", "udapte_at", "delete_at")
    search_fields = ['first_name', 'last_name', 'matricule', 'email', "matricule"]


#register Directer_Docter
@admin.register(Director_Docter)
class Docter_Dir_table(admin.ModelAdmin):
    list_display = ("id", "user")
    search_fields = ['user']


# register Speciality for docter laborating
@admin.register(Speciality)
class Speciality_table(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ['name']

# Register laborateurs table
@admin.register(Docter)
class Docter_table(admin.ModelAdmin):
    list_display = ("id", "speciality", "user")
    search_fields = ["user", "speciality"]

# Register Clients
@admin.register(Client)
class Client_table(admin.ModelAdmin):
    list_display = ("id", "examen_id", "user", "statut")
    search_fields = ["medecin_id", "user"]


# Register Examen (Test)
@admin.register(Exam)
class Exam_table(admin.ModelAdmin):
    list_display = ("name_examen", "prix", "description", "created_at", "udapte_at", "delete_at")
    search_fields = ["name_examen", "prix", "description"]


# Register Resultat of Test
@admin.register(Result)
class Result_table(admin.ModelAdmin):
    list_display = ("id", "exam", "result", "statut", "created_at", "udapte_at", "delete_at")
    list_filter = ("created_at"),
    search_fields = ["exam", "result", "result_creat_at"]


# Register Comment du resultat
@admin.register(Comment)
class Comment_table(admin.ModelAdmin):
    list_display = ("id", "result", "docter", "comments", "created_at", "udapte_at", "delete_at")
    search_fields = ["result", "docter"]


# Register ordonnanc medical
@admin.register(Ordonanc)
class Ordonnanc_table(admin.ModelAdmin):
    list_display = ("id", "docter", "created_at", "udapte_at", "delete_at")
