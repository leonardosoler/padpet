from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from main.views import RegisterAPI

router = routers.DefaultRouter()
# router.register(r'teste', TesteViewSet)
# router.register(r'accounts', AccountViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/register/', RegisterAPI.as_view(), name='register'),
]
