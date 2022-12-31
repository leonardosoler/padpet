from django.test import TestCase
from main.models import Teste
# Create your tests here.


class TestetestCase(TestCase):
    def setUp(self):
        Teste.objects.create(name="lion")
       

    def test_create_teste(self):
        self.assertEquals(Teste.objects.get(name='lion').name,'lion')

    def test_create_teste2(self):
        self.assertEquals(len(Teste.objects.filter(name='lion')),1)
