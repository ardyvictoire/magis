from rest_framework import serializers
from labo_medical.apps.medicalApp.models import User
# from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = "__all__"