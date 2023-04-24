from rest_framework import serializers
from django.contrib.auth.models import User
from pet.models import Pet, Specie, Race

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'name', 'race','specie', 'age')

    def create(self, validated_data):
        pet = Pet.objects.create(name = validated_data['name'], 
                                  race = validated_data['race'], 
                                  specie = validated_data['specie'],
                                  age = validated_data['age'])

        return pet

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

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specie
        fields = ('id', 'name')


class RacesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ('id', 'name', 'specie')


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'name', 'specie', 'race', 'age')