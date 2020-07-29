from rest_framework import serializers

from .models import Employee, Roles

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'

class RolesSerializer(serializers.ModelSerializer):
     
    class Meta: 
        model = Roles
        fields = '__all__'

