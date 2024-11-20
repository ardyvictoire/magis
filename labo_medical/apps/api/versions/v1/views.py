
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
# from snippets.models import Snippet
# from snippets.serializers import SnippetSerializer
# from django.http import Http404
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.contrib.auth import authenticate
from ...serializer import *
from labo_medical.apps.medicalApp.models import *

# register User
class UserRegister(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

# login user
class UserLogin(APIView):
    def post(self, request):
        user = authenticate(username=request.data['username'], password=request.data['password'])
        if user:

            # atribut token
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

# register Speciality and you list
class SpecialityRegisterAndList(generics.ListCreateAPIView):
    queryset = Speciality.objects.all()
    serializer_class = SpecialSerializer
    permissions_classes = [permissions.IsAuthenticated]

# register docter and your list
class DocterRegisterAndList(generics.ListCreateAPIView):
    queryset = Docter.objects.all()
    serializer_class = DocterSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and your list
class ClientRegisterAndList(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializers_class = ClientSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and  list
class ExamRegisterAndList(generics.ListCreateAPIView):
    queryset = Exam.objects.all()
    serializers_class = ExamSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and list
class ResultRegisterAndList(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializers_class = resultSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and list
class CommetRegisterAndList(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializers_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and list
class OrdonnancRegisterAndList(generics.ListCreateAPIView):
    queryset = Ordonanc.objects.all()
    serializers_class = OrdonnancSerializer
    permission_classes = [permissions.IsAuthenticated]




# UPDATE AND DESTROY DATA

# speciality detail
class SpecialityRestrictUpdateDester(generics.RetrieveUpdateDestroyAPIView):
    queryset = Speciality.objects.all()
    serializer_class = SpecialSerializer

# docter datail
class DocterRestrictupdateDestr(generics.RetrieveUpdateDestroyAPIView):
    queryset = Docter.objects.all()
    serializer_class = DocterSerializer



# client detail
class ClientRestrictupdateDestr(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializers_class = ClientSerializer

# register client and  list
class ExamRestrictupdateDestr(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exam.objects.all()
    serializers_class = ExamSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and list
class ResultRestrictupdateDestr(generics.RetrieveUpdateDestroyAPIView):
    queryset = Result.objects.all()
    serializers_class = resultSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and list
class CommetRestrictupdateDestr(generics.RetrieveUpdateDestroyAPIView):
    queryset = Result.objects.all()
    serializers_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

# register client and list
class OrdonnancRestrictupdateDestr(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ordonanc.objects.all()
    serializers_class = OrdonnancSerializer
    permission_classes = [permissions.IsAuthenticated]

