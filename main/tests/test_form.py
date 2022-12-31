from django.test import TestCase
from main.models import Teste
from main.forms import NewUserForm
from django.contrib.auth.models import User

class UsertestCase(TestCase):
    def setUp(self):
        User.objects.create(username="Paulo Roberto de Souza", email = 'paulo@roberto.com', password = 'CRFbeta2021')
        
    def test_create_user_username_with_space(self):
        form = NewUserForm(data={'username':"Paulo Roberto de Souza", 'email' : 'paulo@roberto.com', 'password1' : '123', 'password2' : '123'})
        self.assertEqual(
            form.errors["username"], ["Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters."]
        )

    def test_create_user_short_password(self):
        form = NewUserForm(data={'username':"PauloRoberto", 'email' : 'paulo@roberto.com', 'password1' : '123', 'password2' : '123'})
        print(form.errors['password2'][0])
        self.assertEqual(
            form.errors["password2"][0], "This password is too short. It must contain at least 8 characters."
        )