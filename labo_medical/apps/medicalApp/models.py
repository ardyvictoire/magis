from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from labo_medical.apps.core.models import BaseModel
# Create your models here.


# les donnees du medecin Directeur qui va enregistrer les laboratins
class User(AbstractBaseUser, BaseModel):
    GENDER_CHOISES = (
         ('F', 'Feminin'),
         ('M', 'Masculin')
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    matricule = models.CharField(max_length=30, blank=True, editable=False)
    phone_numb = models.CharField(max_length=23, unique=True)
    adress = models.CharField(max_length=60)
    birthday_date = models.DateField()
    gender = models.CharField(max_length=15, choices=GENDER_CHOISES)
    role = models.CharField(max_length=30)

    USERNAME_FIELD = 'email'

    def __str__(self) :
        return self.email

class Director_Docter(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="director")
    password = models.TextField(max_length=200)

    # last_name = None 
    # username = None 
    # first_name = None
    # email = None 
    # is_staff = None 
    # is_active = None 
    # is_superuser = None
    


# les donnees de la table MEDECIN
class Speciality(BaseModel):
    name = models.TextField(max_length=80)

    def __str__(self) :
        return self.name
    
class Docter(models.Model):
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE, related_name="docters")
    user = models.OneToOneField(User, on_delete=models.RESTRICT, related_name="docter", null=True)
    password = models.CharField(max_length=200)

    def __str__(self) :
        return f"{self.user.email} - Docteur"
    
    class Meta:
        verbose_name = "Docter"

# les donnees de la table Examen(Test)
class Exam(BaseModel):
    name_examen = models.CharField(max_length=80)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField() 

    def __str__(self) :
        return self.name_examen

# les donnees de la table CLIENT(Patient)
class Client(models.Model):
    examen_id = models.ForeignKey(Exam, on_delete=models.RESTRICT, related_name="clients")
    user = models.OneToOneField(User, on_delete=models.RESTRICT, related_name="client", null=True)
    statut = models.CharField(max_length=10)

    # docter_id = models.OneToOneField(User, on_delete=models.RESTRICT, related_name="docterClients", null=True)
    # password = None

    def __str__(self) :
        return f"{self.user.email} - Client"

    class Meta:
        verbose_name = "Client"




# les donnees de la table Resultat des examens
class Result(BaseModel):
    STATE_CHOISES = (
        ('Positive', 'Positive'),
        ('Negative', 'Negative'),
        ('Normal', 'Normal'),
        ('No Result', 'No Result')
    )
    exam = models.ForeignKey(
        Exam, on_delete=models.CASCADE, related_name="results"
    )
    result = models.TextField()
    statut = models.CharField(max_length=15, choices=STATE_CHOISES)


# les donnees de la table commentaire du medecin a propos des resultat
class Comment(BaseModel):
    result = models.ForeignKey(
        Result, on_delete=models.CASCADE, related_name="comments"
    )
    docter = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="comments"
    )
    comments = models.TextField()


# les donnees de la table Ordonnance
class Ordonanc(BaseModel):
    client = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="ordonnance_as_client"
    )
    docter = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="ordonnance_as_docter"
    )
