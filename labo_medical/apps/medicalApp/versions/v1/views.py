from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from django.utils import timezone
from django.core.paginator import Paginator
from django.db.models import Count

# from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect, redirect, render, get_object_or_404
from ...forms import *
from ...models import *


# Create your views here.


# user(genaraly data for )

def send_client_exist(request, pk):

    send = get_object_or_404(User, pk=pk)
    
    if request.method == 'POST':
        form = Client_exist(request.POST)

        if form.is_valid():


            user = send
            examen_id = form.cleaned_data['examen_id']

            client = Client.objects.create(

                user = user, 
                examen_id = examen_id,
            )

        else:
            messages.error(request, "data doesnot valide ...")

    else:
        form = Client_exist()

    return render(request, 'laboratoire/sendclientexist.html', {"form":form})





# Docter Directer
def Docter_Direct_Inscript(request):

    if request.method == 'POST':
        
        # dirDocter = User_form(request.POST)
        direct_form = Directer_Docter_form(request.POST)

        if direct_form.is_valid():

            # userName = form.cleaned_data['userName']
            email = direct_form.cleaned_data['email']
            phone_numb = direct_form.cleaned_data['phone_numb']

            try: 
                get_email_phone = User.objects.get(Q(email = email) | Q(phone_numb=phone_numb))
                # get_email_and_role 

                messages.error(request, "User is exist chois another one ...")
                direct_form = Directer_Docter_form()

            except User.DoesNotExist :

                first_name = direct_form.cleaned_data['first_name']
                last_name = direct_form.cleaned_data['last_name']
                username = direct_form.cleaned_data['username']
                email = direct_form.cleaned_data['email']
                phone_numb = direct_form.cleaned_data['phone_numb']
                adress = direct_form.cleaned_data['adress']
                birthday_date = direct_form.cleaned_data['birthday_date']
                gender = direct_form.cleaned_data['gender']
                role = "superUser"
                password = direct_form.cleaned_data['password']

                docter_user = User.objects.create(
                    first_name = first_name,
                    last_name = last_name,
                    username = username,
                    phone_numb=phone_numb, 
                    email= email, 
                    adress=adress, 
                    birthday_date=birthday_date,
                    gender = gender,
                    role = role,
                    password=password
                ) 

                year = timezone.now().year
                format_id = f"{docter_user.id:02d}"
                suffix = 1

                docter_user.matricule = f"{suffix}{year}{format_id}"

                docter_user.save()

                docter = Director_Docter.objects.create(
                    user = docter_user,
                )

                return redirect('direct_docter')
        else:
            messages.error(request, "The datas is not a valid ...")
            direct_form = Directer_Docter_form()
    else:
        direct_form = Directer_Docter_form()

    return render(request, "medecDirecteur/inscription.html", {"form": direct_form})
            
# directer docter login
def login_user(request):
    
    if request.method == 'POST':
        form = UserLoginForm(request.POST)

        if form.is_valid():

            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            
            user = authenticate(request, username = username, password = password)

            if user is not None:

                login(request, user)
                    
                return redirect("client")
                
            else:
                messages.error(request, "Username or password it is not valid ...")
                form = UserLoginForm() 

            # except User.DoesNotExist :
            #     messages.error(request, "Username or password it is not valid ...")
            #     form = UserLoginForm()
        else:
            messages.error(request, "Data it is not valid ...")
            form = UserLoginForm()

    else:
        form = UserLoginForm()

    return render(request, "medecDirecteur/connexion.html", {"form" : form})


# deconnect Medecin directer
def deconnexion(request):
    logout(request)
    return redirect("deconnexion")


# HOMME PAGE FOR MD
def homme_page(request):
    return render(request, "homme.html")


# ====================== LABORATOIRE ===============


# Laboratory Register
def medecin_Register(request):

    if request.method == "POST":
        # data_gene = User_form(request.POST)
        med_form = Docter_form(request.POST)

        if med_form.is_valid():

            # userName = med_form.cleaned_data['userName']
            email = med_form.cleaned_data['email']
            phone_numb = med_form.cleaned_data['phone_numb']

            try : 

                get_phone_email = User.objects.get(Q(email = email) | Q(phone_numb=phone_numb))
                # get_email_and_role = User.objects.get(Q(email = email) | Q(phone_numb=phone_numb))
                messages.error(request, "User is exist chois another one")
                med_form = Docter_form()
 
            except User.DoesNotExist:

                # userName = med_form.cleaned_data['userName']
                first_name = med_form.cleaned_data['first_name']
                last_name = med_form.cleaned_data['last_name']
                username = med_form.cleaned_data['username']
                email = med_form.cleaned_data['email']
                phone_numb = med_form.cleaned_data['phone_numb']
                adress = med_form.cleaned_data['adress']
                birthday_date = med_form.cleaned_data['birthday_date']
                gender = med_form.cleaned_data['gender']
                role = "laboratory"

                password = med_form.cleaned_data['password']
                speciality = med_form.cleaned_data['speciality']

                # userName=userName, 
                user_as_labor = User.objects.create(
                    first_name = first_name,
                    last_name = last_name,
                    username = username,
                    phone_numb=phone_numb, 
                    email= email, 
                    adress=adress, 
                    birthday_date=birthday_date,
                    gender = gender,
                    role = role,
                    password=password
                ) 

                years = timezone.now().year
                format_id = f"{user_as_labor.id:02d}"
                suffix = 3

                user_as_labor.matricule = f"{years}{suffix}{format_id}"
                user_as_labor.save()

                labor = Docter.objects.create(
                    speciality=speciality,
                    user=user_as_labor,
                )

                med_form = Docter_form()
                return redirect("laboratory")
        else:
            messages.error(request, "data is invalid ....")
            med_form = Docter_form()

    else:
        med_form = Docter_form()

    return render(request, "laboratoire/registreMedecin.html", {"med": med_form})


    

# connexion de medecin laboratoire
def medecin_login(request):
    if request.method == "POST":

        form = MedecinLoginForm(request.POST)

        if form.is_valid():

            email = form.cleaned_data["email"]
            password = form.cleaned_data["password"]

            
            # Vérifiez si le médecin existe avec le l'email et password

            try:
                medecin = User.objects.get(email = email, password = password)


                if medecin is not None :

                    if medecin.role == 'laboratory' :

                        login(request, medecin)

                        return redirect("client_Register")
                    
                    else :
                        messages.error(request, "Data is not valid ...")
                        form = MedecinLoginForm() 

                    
                    # form = MedecinLoginForm() 

                        
                    # Ici, vous pouvez éventuellement stocker l'ID du médecin dans la session
                    # request.session["medecin_id"] = medecin.id
                else:
                    messages.error(request, "Email or password is incorrect ...")
                    form = MedecinLoginForm() 

            except User.DoesNotExist: 
                messages.error(request, "Email or password is incorrect ...")
                form = MedecinLoginForm() 

        else:
            messages.error(request, "Data is not Valid ...")
    else:
        form = MedecinLoginForm()

    return render(request, "base/connexio.html", {"form": form})


# deconnexion de Medecin Laboratory
def medecin_logout(request):

    logout(request)

    return redirect("medecin_login")



def client_Register(request):
    if request.method == "POST":

        client_send = Client_form(request.POST)

        if client_send.is_valid():

            email = client_send.cleaned_data['email']
            phone_numb = client_send.cleaned_data['phone_numb']

            try:
                get_data_unique = User.objects.get(Q(email=email) | Q(phone_numb=phone_numb))
                messages.error(request, "User is exist chois another one ...")
                med_form = Docter_form()

            except User.DoesNotExist :   

                first_name = client_send.cleaned_data['first_name']
                last_name = client_send.cleaned_data['last_name']
                username = client_send.cleaned_data['username'],
                email = client_send.cleaned_data['email']
                phone_numb = client_send.cleaned_data['phone_numb']
                adress = client_send.cleaned_data['adress']
                birthday_date = client_send.cleaned_data['birthday_date']
                gender = client_send.cleaned_data['gender']
                role = 'client'
                statut = False
                password = "client"

                examen_id = client_send.cleaned_data['examen_id']

                user_as_clien = User.objects.create(
                    first_name = first_name,
                    last_name = last_name,
                    username = username,
                    email = email, 
                    phone_numb = phone_numb, 
                    adress = adress, 
                    birthday_date = birthday_date,
                    gender = gender, 
                    role = role, 
                    password = password, 
                )

                year = timezone.now().year
                format_id = f"{user_as_clien.id:02d}"
                suffix = 7

                user_as_clien.matricule = f"{year}{format_id}{suffix}"
                user_as_clien.save()

                client_save = Client.objects.create(
                    examen_id = examen_id, 
                    user = user_as_clien,
                    statut = statut,
                )

                return redirect("client")

        else:
            client_send = Client_form()
            messages.error(request, "Data is not valid, chois another one ...")

    else:
        client_send = Client_form()

    return render(request, "laboratoire/registerClients.html", {"clien": client_send})

# speciality fom (enregister)
def speciality_register(request):
    form = Specialys_form(request.POST)

    if request.method == 'POST':
        
        if form.is_valid():

            form.save()

            return redirect('speciality')

        else:
            messages.error(request, "Speciality is not Valid ...")
            form = Specialys_form()
    else:
        form = Specialys_form()
    return render(request, 'laboratoire/specialityRegister.html', {'form':form})


# Enregister L'examen


def examen_register(request):
    if request.method == "POST":

        ex_form = Examen_form(request.POST)

        if ex_form.is_valid():
            ex_form.save()
            ex_form = Examen_form()

            return redirect("examens")
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


# ========================================================>

# LES FONCTIONS POUR LES PAGES DES CONTENUS

#=========================================================>

def all_users(request):
    users = User.objects.all().order_by('-id')
    paginator = Paginator(users, 4)
    pages = request.GET.get("page", 1)
    pages_object = paginator.get_page(pages)
    total_clients = Client.objects.count()
    total_laboratin = Docter.objects.count()
    total_speciality = Speciality.objects.count()
    total_exam = Exam.objects.count()

    return render(request, "pages_content/users.html", {
        "users":pages_object, 
        "total":total_clients,
        "lab" : total_laboratin,
        "spec" : total_speciality,
        "exam" : total_exam
    }) 

# patient doesnot examenit

def request_exam(request):

    try:
        clients = Client.objects.filter(statut='False')
        
        if clients.exists(): 

            users = clients.select_related("user").order_by('-id')
            paginator = Paginator(users, 4) 
            pages = request.GET.get("page", 1) 
            pages_objects = paginator.get_page(pages)
        else:
            messages.error(request, "Data is not exist ...")

    except :
        messages.error(request, "Data is not exist ...")

    return render(request, "pages_content/exam_request.html", {"users": pages_objects})





def direct_docter_data(request):
    try:
        User.objects.filter(role = 'superUser')
        direct_docter = Director_Docter.objects.select_related('user').order_by('-id')

        paginator = Paginator(direct_docter, 8)
        pages = request.GET.get("page", 1)
        page_object = paginator.get_page(pages)

    except:
        messages.error(request, "Data is not exist ...")
    
    return render(request, 'pages_content/direct_docter.html', {"direct_docters" : page_object})


def all_users_labo(request):
    users = User.objects.all()  

    return render(request, "pages_content/users.html", {"users":users})


def client_data(request):

    try:
        User.objects.filter(role = 'client').exists()
        clients = Client.objects.select_related("user").order_by('-id')

        paginator = Paginator(clients, 5)
        pages = request.GET.get("page")
        page_object = paginator.get_page(pages)

        

    except:
        messages.error(request, "Data Client Does not Exist ...")
    
    return render(request, "pages_content/clients.html", {"clients": page_object})


# data in laboratory
def laboratory_data(request):
    
    try:
        User.objects.filter(role = 'laboratory')

        laborators = Docter.objects.select_related('user')

        paginator = Paginator(laborators, 10).get_page(request.GET.get("page"))
        # pages = request.GET.get("page")
        # page_object = 
    
    except:
        messages.error(request, "laboratory Does not exist")

    return render(request, "pages_content/laboratory.html", {"laborators": paginator})


# comment data
def comment_data(request):
    comment = Comment.objects.all()
    # paginator = Paginator(comment, 5)
    # pages = request.GET.get("page")
    # page_object = paginator.get_page(pages)
    
    return render(request, "pages_content/comment.html", {"comment": comment})


def examen_data(request):
    examen = Exam.objects.all()
    paginator = Paginator(examen, 7)
    pages = request.GET.get("page")
    page_object = paginator.get_page(pages)
    return render(request, "pages_content/examen.html", {"examens": page_object})


def ordonnance_data(request):
    ordonnance = Ordonanc.objects.all()
    return render(request, "pages_content/ordonnance.html", {"ordonnances": ordonnance})


def result_data(request):
    result = Result.objects.all()
    return render(request, "pages_content/result.html", {"results": result})


def speciality(request):
    speciality = Speciality.objects.all()
    paginator = Paginator(speciality, 7)
    pages = request.GET.get("page")
    page_object = paginator.get_page(pages)
    return render(request, 'pages_content/speciality.html', {'specialits':page_object})



# ************** COUNT **********************
# def count_total_clients(request):
#     total_clients = Client.objects.count()
    
#     return render(request, "pages_content/users.html", {"total":total_clients})

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
