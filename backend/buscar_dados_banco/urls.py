from django.urls import path, include
from rest_framework import routers

from buscar_dados_banco.views import EmployeeViewSet, RolesViewSet

router = routers.DefaultRouter()

router.register( 'employee', EmployeeViewSet, basename='employee' )
router.register( 'roles', RolesViewSet, basename='roles' )

urlpatterns = [
    path('', include(router.urls))
]