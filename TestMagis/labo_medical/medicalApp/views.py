from django.shortcuts import render, redirect, HttpResponseRedirect
from .forms import UserForm, Medecin_form, Client_form, Examen_form, Resultat_form, Comment_form, Ordonnance_form, MedecinLoginForm 
from .models import Medecin, Client, Examen, Resultat, Comment, Ordonnance
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# Create your views here.

# register Medecin directer
def inscription_MD(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        
        if form.is_valid():
            form.save()
            return redirect('connexion_MD')
            form = UserForm()
    else:
        form = UserForm()
        
    return render(request, 'medecDirecteur/inscription.html', {'form' : form}) 

# connect Medecin directer
def connexion_MD(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(request, username = username, password = password)
        
        if user is not None:
            login(request, user)
            return redirect('homme_page')
        else:
            messages.error(request, 'nom ou mot de pass sont incorecte')
    return render(request, 'medecDirecteur/connexion.html')

# deconnect Medecin directer
def deconnexion(request):
    logout(request)
    return redirect('connexion_MD')

# HOMME PAGE FOR MD
def homme_page(request):
    return render(request, 'homme.html')


# ====================== LABORATOIRE ===============

# Laboratory Register
def medecin_Register(request):

    if request.method == 'POST' :
        med_form = Medecin_form(request.POST)

        if med_form.is_valid():
            med_form.save()
            med_form = Medecin_form();
        else:
            print(med_form.errors)
    else:
        med_form = Medecin_form()
        medec = Medecin.objects.all()

    return render(request, 'laboratoire/registreMedecin.html', {'med' : med_form})

# connexion de medecin laboratoire
def medecin_login(request):
    if request.method == 'POST':
        form = MedecinLoginForm(request.POST)
        if form.is_valid():
            names = form.cleaned_data['names']
            email = form.cleaned_data['email']
            try:
                # Vérifiez si le médecin existe avec le nom et l'email
                medecin = Medecin.objects.get(names=names, email=email)
                
                # Ici, vous pouvez éventuellement stocker l'ID du médecin dans la session
                request.session['medecin_id'] = medecin.id
                
                return redirect('client_Register') 
             
            # Erreur si le médecin n'est pas trouvé
            except Medecin.DoesNotExist:
               
                form.add_error(None, 'Nom d\'utilisateur ou email invalide.')
    else:
        form = MedecinLoginForm()
    
    return render(request, 'base/connexio.html', {'form': form})


# deconnexion de Medecin Laboratory
def medecin_logout(request):
    logout(request)
    # if 'medecin_id' in request.session:
        # del request.session['medecin_id']
    return redirect('medecin_login') 



# Enregistrement de clients


def client_Register(request):
    if request.method == 'POST':
        client_send = Client_form(request.POST)
        
        if client_send.is_valid():
            client_send.save()
        
            client_send = Client_form();
            
            return redirect('client_data')
        
        else:
            print(client_send.errors)
    else:
        client_send = Client_form();
    
   
    return render(request, 'laboratoire/registerClients.html', {'clien' : client_send})

# Enregister L'examen

def examen_register(request):
    if request.method == 'POST':
        ex_form = Examen_form(request.POST)
        
        if ex_form.is_valid():
            ex_form.save()
            ex_form = Examen_form();
            
            return redirect('examen_data')
        else:
            print(ex_form.errors)
    else:
        ex_form = Examen_form();
    return render(request, 'laboratoire/registerExamen.html', {'examen' : ex_form })

# enregister le resultat de l'examen

def resultat_Register(request):
    if request.method == 'POST':
        result_save = Resultat_form(request.POST)
        
        if result_save.is_valid():
            result_save.save()
            result_save = Resultat_form();
            
            return redirect('result_data')
        else:
            print(result_save.errors)
    else:
        result_save = Resultat_form();
        
    return render(request, 'laboratoire/registerResults.html', {'resultat_save' : result_save})

# Enregistrer l'Ordonnance

def ordonnance_register(request):
    if request.method == 'POST':
        ordonnance = Ordonnance_form(request.POST)
        
        if ordonnance.is_valid():
            ordonnance.save()
            ordonnance = Ordonnance_form();
            
            return redirect('ordonnance_data')
        else:
            print(ordonnance.errors)
    else:
        ordonnance = Ordonnance_form()
    
    return render(request, 'laboratoire/registerOrdonanc.html', {'ordonnance' : ordonnance})

# enregister le resultat de l'examen

def comment_register(request):
    if request.method == 'POST':
        comment = Comment_form(request.POST)
        
        if comment.is_valid():
            comment.save()
            comment = Comment_form();
            return redirect('client_data')
        else:
            print(comment.errors)
    else:
        comment = Comment_form();
        
    return render(request, 'laboratoire/registerComment.html', {'comments' : comment})



# LES FONCTIONS POUR LES PAGES DES CONTENUS

def client_data(request):
    client = Client.objects.all()
    return render(request, 'pages_content/clients.html', {'client' : client})


def comment_data(request):
    comment = Comment.objects.all()
    return render(request, 'pages_content/comment.html', {'comment':comment})


def examen_data(request):
    examen = Examen.objects.all()
    return render(request, 'pages_content/examen.html',{'examen':examen})


def medecin_data(request):
    medecin = Medecin.objects.all()
    return render(request, 'pages_content/medecin.html', {'medecin':medecin})

def ordonnance_data(request):
    ordonnance = Ordonnance.objects.all()
    return render(request, 'pages_content/ordonnance.html', {'ordonnance':ordonnance})

def result_data(request):
    result = Resultat.objects.all()
    return render(request, 'pages_content/result.html', {'result':result})


# DELETE DATA IN DATA BASE

# delete client
def delete_date(request, id):
    if request.method == 'POST':
        delet = Client.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect('/client_data/')
    
def delete_data_comment(request, id):
    if request.method == 'POST':
        delet = Comment.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect('/comment_data/')

def delete_data_examen(request, id):
    if request.method == 'POST':
        delet = Examen.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect('/examen_data/')

def delete_data_ordonn(request, id):
    if request.method == 'POST':
        delet = Ordonnance.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect('/ordonnance_data/')

def delete_data_result(request, id):
    if request.method == 'POST':
        delet = Resultat.objects.get(pk=id)
        delet.delete()
        return HttpResponseRedirect('/result_data/')