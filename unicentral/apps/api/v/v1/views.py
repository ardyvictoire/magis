from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from ...models import Faculty, Departement
from unicentral.apps.api.serializers import FacultySerializer, DepartmentSerializer


class FacultyViewSet(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class DepartementViewSet(viewsets.ModelViewSet):
    queryset = Departement.objects.select_related('faculty')
    serializer_class = DepartmentSerializer

# class Department(viewsets.ViewSet):
    
#     def list(self,request):
#         departement=Departement.objects.all()
#         faculty = Faculty.objects.filter(pk=departement)
#         serializer = DepartmentSerializer(faculty, many=True)

#         return Response(serializer.data)


