from rest_framework import serializers
from django.contrib.auth.models import User
from pet.models import Pet

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user


# Register Serializer
class PetRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'name',)

    def create(self, validated_data):
        pet = Pet.objects.create(validated_data['name'])

        return pet
class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'name')