from itertools import cycle
from rest_framework import serializers

from .models import (University, Faculty, Departement, Cycle,
                    Discussion, Article, Response, Nationnality,
                    Candidate)


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = '__all__'

    
    def get_image_url(self, obj):
        if self.obj.image:
            request = self.context.get('request')
            url = request.build_absolute_uri(obj.image.url)
        return url


class CycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cycle
        fields = '__all__'


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'


class DepartmentSerializer(serializers.ModelSerializer):

    faculty = FacultySerializer()

    class Meta:
        model = Departement
        fields = ['id','created_by','departement_name','faculty']


class NationnalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Nationnality
        fields = '__all__'


class CandidateSerializer(serializers.ModelSerializer):

    university = UniversitySerializer(many=True)
    cycle = CycleSerializer(many=True)
    faculty = FacultySerializer(many=True)
    departement = DepartmentSerializer(many=True)
    nationnality = NationnalitySerializer(many=True)

    class Meta:
        model = Candidate
        fields = ['id','created_at','deleted_at',
                 'updated_at','university','cycle','faculty',
                 'departement','nationnality','first_name',
                 'last_name','age','gender','date_birth']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


    def get_image_url(self, obj):
        if self.obj.image:
            request = self.context.get('request')
            url = request.build_absolute_uri(obj.image.url)
        return url
    
    def get_video_url(self, obj):
        if obj.video:
            request = self.context.get('request')
            url = request.build_absolute_uri(obj.video.url)
        return url


class DiscussionSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Discussion
        fields = '__all__'

    
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class ResponseSerializer(serializers.ModelSerializer):

    discussion = DiscussionSerialiser(many=True)

    class Meta:
        model = Response
        fields = ['id','created_at','created_by','deleted_at',
                 'discussion','response']
