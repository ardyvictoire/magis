from rest_framework.response import Response
# from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet


class HelloAPIView(APIView):
    def get(self, request):
        return Response({"message": "hello world"})