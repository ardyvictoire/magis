from django.db import models
from unicentral.apps.core.models import BaseModel


class University(BaseModel):
    name = models.CharField(max_length=150)
    adress = models.CharField(max_length=150)
    province = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='image_university')
    link = models.URLField()

    # d'autre champ peuvent etre necessaire ici


class Cycle(BaseModel):
    name = models.CharField(max_length=100)
    university = models.ForeignKey(University, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"


class Faculty(BaseModel):
    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE)
    faculty_name = models.CharField(max_length=100)

    # d'autre champ peuvent etre necessaire ici

    def __str__(self):
        return f"{self.faculty_name}"


class Departement(BaseModel):
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='departement')
    departement_name = models.CharField(max_length=100)

    # d'autre champ peuvent etre necessaire ici

    def __str__(self):
        return f"{self.departement_name}"

""" 
Le model nationnality est utiliser pour regrouper 
toutes les nationnalites a partir de la relation avec la candidature,
l'utilisation de TextChoices peut prendre plus des informations dans le code
car beaucoup plus de nationnalites seront inclus

"""

class Nationnality(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"


class Candidate(BaseModel):

    GENDER = {
        'masculin':'masculin',
        'feminin':'feminin',
        'autres':'autres'
    }
        
    nationnality = models.ForeignKey(Nationnality, on_delete=models.CASCADE)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    departement = models.ForeignKey(Departement, on_delete=models.CASCADE)

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField(default=0)
    gender = models.CharField(choices=GENDER, max_length=20)
    date_birth = models.DateField()
    
    # plusieurs d'autres champs doivent etre inclus ici


class Article(BaseModel):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to="image/", blank=True, null=True)
    video = models.FileField(upload_to="video/", blank=True, null=True)
    description = models.TextField()
    author = models.CharField(max_length=100)

    # d'autres champs peuvent etre inclus ici


class Discussion(BaseModel):
    title = models.CharField(max_length=100)
    message = models.TextField()

     # d'autres champs peuvent etre inclus ici


class Response(BaseModel):
    discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE)
    response = models.TextField()

    # D'autres champs peuvent etres necessaire ici

