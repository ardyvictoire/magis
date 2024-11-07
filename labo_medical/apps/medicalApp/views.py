from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect, redirect, render
from .forms import *

from .models import *

# Create your views here.
def User_Inscription(request):
    if request.method == 'POST':
        form = User_form(request.POST)

        if form.is_valid():
            form.save()
            form = User_form()

            return redirect('Medecin_Register')
        else:
            print(User_form.errors)
    
    else:
        form = User_form()
    
    return render(request, "medecDirecteur/inscription.html", {"form": form})
            

def login_user(request):
    
    if request.method == 'POST':
        form = UserLoginForm(request.POST)

        if form.is_valid():

            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            try:
                md = User.objects.get(email=email, password=password)

                request.session["user_id"] = md.id
                return redirect("Medecin_Register")
            
            except:
                messages.error(request, "Email ou Mot de pass ne pas correcte ...")
                form = UserLoginForm()
        else:
            messages.error(request, "Email ou Mot de pass ne pas correcte ...")
            form = UserLoginForm()
    else:
        form = UserLoginForm()

    return render(request, "medecDirecteur/connexion.html", {"form" : form})


# deconnect Medecin directer
def deconnexion(request):
    logout(request)
    return redirect("connexion_MD")


# HOMME PAGE FOR MD
def homme_page(request):
    return render(request, "homme.html")


# ====================== LABORATOIRE ===============


# Laboratory Register
def medecin_Register(request):

    if request.method == "POST":
        med_form = Docter_form(request.POST)

        if med_form.is_valid():
            med_form.save()
            med_form = Docter_form()
        else:
            print(med_form.errors)
    else:
        med_form = Docter_form()

    return render(request, "laboratoire/registreMedecin.html", {"med": med_form})


# connexion de medecin laboratoire
def medecin_login(request):
    if request.method == "POST":
        form = MedecinLoginForm(request.POST)
        if form.is_valid():
            names = form.cleaned_data["names"]
            email = form.cleaned_data["email"]
            try:
                # Vérifiez si le médecin existe avec le nom et l'email
                medecin = Docter.objects.get(names=names, email=email)

                # Ici, vous pouvez éventuellement stocker l'ID du médecin dans la session
                request.session["medecin_id"] = medecin.id

                return redirect("client_Register")

            # Erreur si le médecin n'est pas trouvé
            except Docter.DoesNotExist:

                form.add_error(None, "Nom d'utilisateur ou email invalide.")
    else:
        form = MedecinLoginForm()

    return render(request, "base/connexio.html", {"form": form})


# deconnexion de Medecin Laboratory
def medecin_logout(request):
    logout(request)
    # if 'medecin_id' in request.session:
    # del request.session['medecin_id']
    return redirect("medecin_login")


# Enregistrement de clients


def client_Register(request):
    if request.method == "POST":
        client_send = Client_form(request.POST)

        if client_send.is_valid():
            client_send.save()

            client_send = Client_form()

            return redirect("client_data")

        else:
            print(client_send.errors)
    else:
        client_send = Client_form()

    return render(request, "laboratoire/registerClients.html", {"clien": client_send})


# Enregister L'examen


def examen_register(request):
    if request.method == "POST":
        ex_form = Examen_form(request.POST)

        if ex_form.is_valid():
            ex_form.save()
            ex_form = Examen_form()

            return redirect("examen_data")
        else:
            print(ex_form.errors)
    else:
        ex_form = Examen_form()
    return render(request, "laboratoire/registerExamen.html", {"examen": ex_form})


# enregister le resultat de l'examen


def resultat_Register(request):
    if request.method == "POST":
        result_save = Resultat_form(request.POST)

        if result_save.is_valid():
            result_save.save()
            result_save = Resultat_form()

            return redirect("result_data")
        else:
            print(result_save.errors)
    else:
        result_save = Resultat_form()

    return render(
        request, "laboratoire/registerResults.html", {"resultat_save": result_save}
    )


# Enregistrer l'Ordonnance


def ordonnance_register(request):
    if request.method == "POST":
        ordonnance = Ordonnance_form(request.POST)

        if ordonnance.is_valid():
            ordonnance.save()
            ordonnance = Ordonnance_form()

            return redirect("ordonnance_data")
        else:
            print(ordonnance.errors)
    else:
        ordonnance = Ordonnance_form()

    return render(
        request, "laboratoire/registerOrdonanc.html", {"ordonnance": ordonnance}
    )


# enregister le resultat de l'examen


def comment_register(request):
    if request.method == "POST":
        comment = Comment_form(request.POST)

        if comment.is_valid():
            comment.save()
            comment = Comment_form()
            return redirect("client_data")
        else:
            print(comment.errors)
    else:
        comment = Comment_form()

    return render(request, "laboratoire/registerComment.html", {"comments": comment})


# LES FONCTIONS POUR LES PAGES DES CONTENUS


def client_data(request):
    client = Client.objects.all()
    return render(request, "pages_content/clients.html", {"client": client})


def comment_data(request):
    comment = Comment.objects.all()
    return render(request, "pages_content/comment.html", {"comment": comment})


def examen_data(request):
    examen = Exam.objects.all()
    return render(request, "pages_content/examen.html", {"examen": examen})


def medecin_data(request):
    medecin = Docter.objects.all()
    return render(request, "pages_content/medecin.html", {"medecin": medecin})


def ordonnance_data(request):
    ordonnance = Ordonanc.objects.all()
    return render(request, "pages_content/ordonnance.html", {"ordonnance": ordonnance})


def result_data(request):
    result = Result.objects.all()
    return render(request, "pages_content/result.html", {"result": result})


# DELETE DATA IN DATA BASE


# delete client
def delete_date(request, id):
    if request.method == "POST":
        delet = Client.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect("/client_data/")


def delete_data_comment(request, id):
    if request.method == "POST":
        delet = Comment.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect("/comment_data/")


def delete_data_examen(request, id):
    if request.method == "POST":
        delet = Exam.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect("/examen_data/")


def delete_data_ordonn(request, id):
    if request.method == "POST":
        delet = Ordonanc.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect("/ordonnance_data/")


def delete_data_result(request, id):
    if request.method == "POST":
        delet = Result.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect("/result_data/")
