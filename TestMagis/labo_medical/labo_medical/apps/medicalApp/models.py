from django.db import models

# Create your models here.


# les donnees du medecin Directeur qui va enregistrer les laboratins
class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.TextField()


# les donnees de la table MEDECIN
class Medecin(models.Model):
    names = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_numb = models.CharField(max_length=23)
    speciality = models.CharField(max_length=50)


# les donnees de la table CLIENT(Patient)
class Client(models.Model):
    names = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_numb = models.CharField(max_length=23)
    adress = models.CharField(max_length=60)
    birthday_date = models.DateField()


# les donnees de la table Examen(Test)
class Examen(models.Model):
    name_examen = models.CharField(max_length=80)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()


# les donnees de la table Resultat des examens
class Resultat(models.Model):
    id_examen = models.ForeignKey(
        Examen, on_delete=models.CASCADE, related_name="resultats"
    )
    resultat = models.TextField()
    date_resultat = models.DateField()


# les donnees de la table commentaire du medecin a propos des resultat
class Comment(models.Model):
    id_resultat = models.ForeignKey(
        Resultat, on_delete=models.CASCADE, related_name="comments"
    )
    id_medecin = models.ForeignKey(
        Medecin, on_delete=models.CASCADE, related_name="comments"
    )
    comments = models.TextField()


# les donnees de la table Ordonnance
class Ordonnance(models.Model):
    id_client = models.ForeignKey(
        Client, on_delete=models.CASCADE, related_name="ordonnance"
    )
    id_medecin = models.ForeignKey(
        Medecin, on_delete=models.CASCADE, related_name="ordonnance"
    )
    date_ordonnance = models.DateField()
