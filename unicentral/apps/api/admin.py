from django.contrib import admin

from .models import (University, Cycle, Faculty, Candidate,
                    Departement, Article, Discussion, Response,
                    Nationnality)


class UniversityAdmin(admin.ModelAdmin):
    list_display = ('id','name','adress','province','description','created_by')

class CycleAdmin(admin.ModelAdmin):
    list_display = ('id','name','university','created_by')

class FacultyAdmin(admin.ModelAdmin):
    list_display = ('id','cycle','faculty_name','created_by')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('id','faculty','departement_name','created_by')

class NationnalityAdmin(admin.ModelAdmin):
    list_display = ('id','name')

class CandidateAdmin(admin.ModelAdmin):
    list_display = ('id','nationnality','university','cycle','faculty',
                    'first_name','last_name','age','gender','date_birth',
                    'created_by')

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id','title','image','video','description','author')

class DiscussionAdmin(admin.ModelAdmin):
    list_display = ('id','title','message','created_by')

class ResponseAdmin(admin.ModelAdmin):
    list_display = ('id','discussion','response','created_by')


# Enregistrement des tous les modeles dans l'administration


admin.site.register(University, UniversityAdmin)
admin.site.register(Cycle, CycleAdmin)
admin.site.register(Faculty, FacultyAdmin)
admin.site.register(Departement, DepartmentAdmin)
admin.site.register(Nationnality, NationnalityAdmin)
admin.site.register(Candidate, CandidateAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Discussion, DiscussionAdmin)
admin.site.register(Response, ResponseAdmin)