from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.core import validators

from .models import Client, Comment, Examen, Medecin, Ordonnance, Resultat


# form pour creat Medecin Directeur
class UserForm(UserCreationForm):
    password1 = forms.CharField(
        label="Password",
        strip=False,
        widget=forms.PasswordInput(attrs={"autocomplete": "new-password"}),
    )

    password2 = forms.CharField(
        label="Password Conf.",
        strip=False,
        widget=forms.PasswordInput(attrs={"autocomplete": "new-password"}),
    )

    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ("password1", "password2")


# end log Medecin Directeur


# for Laboratoir


# form Medecin
class Medecin_form(forms.ModelForm):
    class Meta:
        model = Medecin
        fields = ["names", "email", "phone_numb", "speciality"]
        widgets = {
            "names": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "email": forms.EmailInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "phone_numb": forms.NumberInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "speciality": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# Login Medecin
class MedecinLoginForm(forms.Form):
    names = forms.CharField(max_length=50)
    email = forms.EmailField()
    widgets = {
        "names": forms.TextInput(
            attrs={"class": "form-control", "autocomplete": "off"}
        ),
        "email": forms.EmailInput(
            attrs={"class": "form-control", "autocomplete": "off"}
        ),
    }


# cliet form
class Client_form(forms.ModelForm):
    class Meta:
        model = Client
        fields = ["names", "email", "phone_numb", "adress", "birthday_date"]
        widgets = {
            "names": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "email": forms.EmailInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "phone_numb": forms.NumberInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "adress": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "birthday_date": forms.DateInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# form Examen
class Examen_form(forms.ModelForm):
    class Meta:
        model = Examen
        fields = ["name_examen", "prix", "description"]
        widgets = {
            "name_examen": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "prix": forms.NumberInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "description": forms.Textarea(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# form Resultat
class Resultat_form(forms.ModelForm):
    class Meta:
        model = Resultat
        fields = ["id_examen", "resultat", "date_resultat"]
        widgets = {
            "id_exame": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "resultat": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "date_resultat": forms.DateInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# form comment
class Comment_form(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ["id_resultat", "id_medecin", "comments"]
        widgets = {
            "id_resultat": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "id_medecin": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "comments": forms.Textarea(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# form ordonnac
class Ordonnance_form(forms.ModelForm):
    class Meta:
        model = Ordonnance
        fields = ["id_client", "id_medecin", "date_ordonnance"]
        widgets = {
            "id_client": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "id_medecin": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "date_ordonnance": forms.DateInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }
