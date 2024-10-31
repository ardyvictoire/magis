from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import Client, Comment, Exam, Docter, Ordonanc, Result, Speciality

# from django.core import validators


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

# form for specializations 
class Specialys_form(forms.ModelForm):
    class Meta:
        model = Speciality
        fields = ['name']
        widgets ={
            "name" : forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            )
        }

# form Medecin
class Docter_form(forms.ModelForm):
    class Meta:
        model = Docter
        # fields = ["first_name", "last_name", "email", "phone_numb", "adress", "birthday_date", "user", "speciality", "password"]
        fields = ["names", "email", "phone_numb", "adress", "birthday_date", "user", "speciality"]
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
            
            "speciality": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),

            "user":forms.Select(
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

        fields = ["names", "email", "phone_numb", "adress", "birthday_date", "user", "examen_id", "docter_id"]
       
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
            "birthday_date":forms.DateInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),

            "examen_id": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            
            "user":forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),

            "docter_id":forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            )
            
        }


# form Examen
class Examen_form(forms.ModelForm):
    class Meta:
        model = Exam
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
        model = Result
        fields = ["exam", "result", "result_creat_at"]
        widgets = {
            "exam": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "result": forms.TextInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "result_creat_at": forms.DateInput(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# form comment
class Comment_form(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ["result", "docter", "comments"]
        widgets = {
            "result": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "docter": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "comments": forms.Textarea(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }


# form ordonnac
class Ordonnance_form(forms.ModelForm):
    class Meta:
        model = Ordonanc
        fields = ["client", "docter"]
        widgets = {
            "client": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
            "docter": forms.Select(
                attrs={"class": "form-control", "autocomplete": "off"}
            ),
        }