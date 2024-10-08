from django.contrib import admin
from .models import Medecin, Client, Examen, Resultat, Comment, Ordonnance

# Register your models here.

# Register laborateurs
@admin.register(Medecin)
class Medeci_table(admin.ModelAdmin):
    list_display = ('id', 'names', 'email', 'phone_numb', 'speciality')
    search_fields = ['names', 'email', 'speciality']

# Register Clients
@admin.register(Client)
class Client_table(admin.ModelAdmin):
    list_display = ('id', 'names', 'email', 'phone_numb', 'adress', 'birthday_date')
    search_fields = ['names', 'email']

# Register Examen (Test)
@admin.register(Examen)
class Examen_table(admin.ModelAdmin):
    list_display = ('name_examen', 'prix', 'description')
    search_fields = ['name_examen', 'prix', 'description']

# Register Resultat of Test
@admin.register(Resultat)
class Resultat_table(admin.ModelAdmin):
    list_display = ('id', 'id_examen', 'resultat', 'date_resultat')
    list_filter = ('date_resultat',)
    search_fields = ['id_examen', 'resultat', 'date_resultat']

# Register Comment du resultat 
@admin.register(Comment)
class Comment_table(admin.ModelAdmin):
    list_display = ('id', 'id_resultat', 'id_medecin', 'comments')
    search_fields = ['id_resultat', 'id_medecin']

# Register ordonnanc medical
@admin.register(Ordonnance)
class Ordonnance_table(admin.ModelAdmin):
    list_display = ('id', 'id_medecin', 'date_ordonnance')
    list_filter = ('date_ordonnance',)
    search_fields = ['id_medecin', 'date_ordonnance']
