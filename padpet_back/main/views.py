# IMPORTS
from django.shortcuts import render
from django.contrib.auth import login

from main.models import User
from .serializers import UserSerializer, RegisterSerializer, PetRegisterSerializer, PetSerializer
# KNOX
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken
# REST
from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer


class PetRegisterView(generics.GenericAPIView):
    def get(self, request):
        return self


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Register API


class PetRegisterAPI(generics.GenericAPIView):
    serializer_class = PetRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": PetSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)
