from rest_framework import serializers
from labo_medical.apps.medicalApp.models import *
# from .models import CustomUser

# serializer for User (Docter Chef)
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = "__all__"


class SpecialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speciality
        fields = "__all__"

# serializer for laboratory
class DocterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = Docter
        fields = "__all__"


# serializer for client 
class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = "__all__"

# serializer for exam
class ExamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exam
        fields = "__all__"

# serializer for result
class resultSerializer(serializers.ModelSerializer):

    class Meta:
        model = Result
        fields = "__all__"

# serializer for comment
class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"

# serializer for ordonnanc
class OrdonnancSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ordonanc
        fields = "__all__"