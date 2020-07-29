from rest_framework import viewsets

from .models import Employee, Roles
from .serializers import EmployeeSerializer, RolesSerializer 

class EmployeeViewSet(viewsets.ModelViewSet):

    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()


class RolesViewSet(viewsets.ModelViewSet):

    serializer_class = RolesSerializer
    queryset = Roles.objects.all()

