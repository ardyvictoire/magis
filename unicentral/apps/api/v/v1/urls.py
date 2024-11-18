from django.urls import include, path
from rest_framework import routers

from .views import DepartementViewSet, FacultyViewSet

router = routers.DefaultRouter()
router.register(r'departments', DepartementViewSet, basename='department')
router.register(r'facultes', FacultyViewSet, basename = 'facultes')

urlpatterns = [
    path("", include(router.urls)),
]
