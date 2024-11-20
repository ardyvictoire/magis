from django import forms
# from django.contrib.auth.forms import UserCreationForm

# from .models import Client, Comment, Exam, Docter, Ordonanc, Result, Speciality, 
from .models import *
from .models import Director_Docter

class User_form(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name','email', 'phone_numb', 'adress', 'birthday_date', 'gender']

        widgets = {
            'first_name' : forms.TextInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "UserName", "autocomplete": "off"}),
            'last_name' : forms.TextInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "UserName", "autocomplete": "off"}),
            'matricule' : forms.TextInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "UserName", "autocomplete": "off"}),
            'email' : forms.EmailInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "E mail", "autocomplete": "off"}),
            'phone_numb' : forms.NumberInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "Phone Number", "autocomplete": "off"}),
            'adress' : forms.TextInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "Adress", "autocomplete": "off"}),
            'birthday_date' : forms.DateInput(attrs={"class": "form-control border-1 border-primary", "placeholder" : "Birthday Date", "autocomplete": "off"}),
            'gender' : forms.Select(attrs={"class": "form-control border-1 border-primary", "placeholder" : "Gender", "autocomplete": "off"}),
        }

class UserLoginForm(forms.Form):
    email = forms.EmailField(
        widget=forms.EmailInput(
            {"class": "form-control", "autocomplete": "off"}
        )
    )

    password = forms.CharField(
        widget= forms.PasswordInput(
            attrs={"class": "form-control border-1 border-primary", "placeholder" : "Password", "autocomplete": "off"}
        )
    )

class Directer_Docter_form(User_form):
    

    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={"class": "form-control border-1 border-primary", "placeholder" : "Password", "autocomplete": "off"}
        )
    )

# end log Medecin Directeur


# for Laboratoir

# form for specializations 
class Specialys_form(forms.ModelForm):
    class Meta:
        model = Speciality
        fields = ['name']
        widgets ={
            "name" : forms.TextInput(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Name", "autocomplete": "off"}
            )
        }


# form Medecin
class Docter_form(User_form):
        speciality = forms.ModelChoiceField(

            queryset=Speciality.objects.all(),

            widget = forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Speciality", "autocomplete": "off"}
            )
        )

        password = forms.CharField(
            widget = forms.PasswordInput(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Password", "autocomplete": "off"}
            )
        )
    


# Login Medecin
class MedecinLoginForm(forms.Form):
    names = forms.CharField(
        max_length=50,
        widget=forms.TextInput(
            attrs={"class": "form-control border-1 border-primary", "placeholder" : "UserName", "autocomplete": "off"}
        )
    )

    email = forms.EmailField(
        widget=forms.EmailInput(
            {"class": "form-control border-1 border-primary", "placeholder" : "Email", "autocomplete": "off"}
        )
    )


# cliet form
class Client_form(User_form):

    examen_id = forms.ModelChoiceField(
        queryset = Exam.objects.all(),
        widget=forms.Select(
            attrs={"class": "form-control border-1 border-primary", "placeholder" : "Examen", "autocomplete": "off"}
        )
    )

# formulaire de l'existance d'un utilisateur
class Client_exist(forms.ModelForm):
    
    class Meta:
        model = Client

        fields = ["examen_id"]
        
        widgets = {
            "examen_id" : forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Exam", "autocomplete": "off"}
            ) 
        }
        

       

# form Examen
class Examen_form(forms.ModelForm):
    class Meta:
        model = Exam
        fields = ["name_examen", "prix", "description"]
        widgets = {
            "name_examen": forms.TextInput(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Exam", "autocomplete": "off"}
            ),
            "prix": forms.NumberInput(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Prix", "autocomplete": "off"}
            ),
            "description": forms.Textarea(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Description", "autocomplete": "off"}
            ),
        }


# form Resultat
class Resultat_form(forms.ModelForm):
    class Meta:
        model = Result
        fields = ["exam", "result", 'statut']
        widgets = {
            "exam": forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Exam", "autocomplete": "off"}
            ),
            "result": forms.TextInput(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Result", "autocomplete": "off"}
            ),

            "statut" : forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Result", "autocomplete": "off"}
            ),
        }


# form comment
class Comment_form(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ["result", "docter", "comments"]
        widgets = {
            "result": forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Result", "autocomplete": "off"}
            ),
            "docter": forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Docter", "autocomplete": "off"}
            ),
            "comments": forms.Textarea(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Comment", "autocomplete": "off"}
            ),
        }


# form ordonnac
class Ordonnance_form(forms.ModelForm):
    class Meta:
        model = Ordonanc
        fields = ["client", "docter"]
        widgets = {
            "client": forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Client", "autocomplete": "off"}
            ),
            "docter": forms.Select(
                attrs={"class": "form-control border-1 border-primary", "placeholder" : "Docter", "autocomplete": "off"}
            ),
        }