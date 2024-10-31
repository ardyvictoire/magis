from django.contrib import admin

from .models import Client, Comment, Exam, Docter, Ordonanc, Result, Speciality

# Register your models here.

# register Speciality for docter laborating
@admin.register(Speciality)
class Speciality_table(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ['name']

# Register laborateurs
@admin.register(Docter)
class Docter_table(admin.ModelAdmin):
    list_display = ("id", "names", "email", "phone_numb", "adress", "birthday_date", "speciality", "user", "password", "created_at", "udapte_at", "delete_at")
    search_fields = ["names", "email"]

# Register Clients
@admin.register(Client)
class Client_table(admin.ModelAdmin):
    list_display = ("id", "names", "email", "phone_numb", "adress", "birthday_date", "examen_id", "user", "docter_id", "created_at", "udapte_at", "delete_at")
    search_fields = ["names", "email"]


# Register Examen (Test)
@admin.register(Exam)
class Exam_table(admin.ModelAdmin):
    list_display = ("name_examen", "prix", "description", "created_at", "udapte_at", "delete_at")
    search_fields = ["name_examen", "prix", "description"]


# Register Resultat of Test
@admin.register(Result)
class Result_table(admin.ModelAdmin):
    list_display = ("id", "exam", "result", "result_creat_at", "created_at", "udapte_at", "delete_at")
    list_filter = ("result_creat_at",)
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
