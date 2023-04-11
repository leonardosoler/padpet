#IMPORTS
from django.contrib import admin
from django.urls import path, include
from main.views import RegisterAPI, LoginAPI, PetRegisterView, SpeciesListView, RacesListView, PetListView
## KNOX
from knox import views as knox_views
## REST
from rest_framework import routers


router = routers.DefaultRouter()
# router.register(r'teste', TesteViewSet)
# router.register(r'accounts', AccountViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    
    # POST
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/pet-register/', PetRegisterView.as_view(), name='register'),
    # GET
    path('api/species-list/', SpeciesListView.as_view(), name='species-list'),
    path('api/races-list/', RacesListView.as_view(), name='races-list'),
    path('api/pet-list/', PetListView.as_view(), name='pet-list'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    # POST/GET
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]


