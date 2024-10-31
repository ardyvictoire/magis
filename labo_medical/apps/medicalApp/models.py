from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission, AbstractBaseUser
# Create your models here.


# les donnees du medecin Directeur qui va enregistrer les laboratins
class User(AbstractBaseUser):
    names = models.TextField(max_length=60)
    email = models.EmailField(max_length=90)
    phone_numb = models.CharField(max_length=23)
    adress = models.CharField(max_length=60)
    birthday_date = models.DateField()
    password = models.TextField(max_length=255)

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',
        blank=True,
        help_text='The groups this user belongs to.'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',  
        blank=True,
        help_text='Specific permissions for this user.'
    )

# les donnees de la table MEDECIN

class Speciality(models.Model):
    name = models.TextField(max_length=80)
    
class Docter(User):
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE, related_name="docterSpeciality")
    user = models.OneToOneField(User, on_delete=models.RESTRICT, related_name="docters")

    class Mata:
        verbose_name = "Docter"

# les donnees de la table Examen(Test)
class Exam(models.Model):
    name_examen = models.CharField(max_length=80)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField() 

# les donnees de la table CLIENT(Patient)
class Client(User):
    examen_id = models.ForeignKey(Exam, on_delete=models.RESTRICT, related_name="examClient")
    user = models.OneToOneField(User, on_delete=models.RESTRICT, related_name="userClients")
    docter_id = models.OneToOneField(Docter, on_delete=models.RESTRICT, related_name="docterClients")
    password = None

    class Meta:
        verbose_name = "Client"




# les donnees de la table Resultat des examens
class Result(models.Model):
    exam = models.ForeignKey(
        Exam, on_delete=models.CASCADE, related_name="resultats"
    )
    result = models.TextField()
    result_creat_at = models.DateField()


# les donnees de la table commentaire du medecin a propos des resultat
class Comment(models.Model):
    result = models.ForeignKey(
        Result, on_delete=models.CASCADE, related_name="comments"
    )
    docter = models.ForeignKey(
        Docter, on_delete=models.CASCADE, related_name="comments"
    )
    comments = models.TextField()


# les donnees de la table Ordonnance
class Ordonanc(models.Model):
    client = models.ForeignKey(
        Client, on_delete=models.CASCADE, related_name="ordonnance"
    )
    docter = models.ForeignKey(
        Docter, on_delete=models.CASCADE, related_name="ordonnance"
    )
    ordonnanc_creat_at = models.DateField()
