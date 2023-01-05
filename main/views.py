from django.shortcuts import render
from django.views.generic.list import ListView
from main.models import Teste
from django.conf.urls.static import static
from django.contrib.auth.models import User
from django.shortcuts import  render, redirect
from .forms import NewUserForm
from django.contrib.auth import login
from django.contrib import messages

class  HomePageView(ListView):
    model = Teste
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context.update(self.extra_context)
        context['register_form'] = NewUserForm()
        print(User.objects.all())

        return context

    def post (self, request):
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            # login(request, user)
            messages.success(request, "Registration successful." )
            return redirect("main:home")

        messages.error(request, "Unsuccessful registration. Invalid information.")
        return request

def register_request(request):

	form = NewUserForm()

	return render (request=request, template_name="home.html", context={"register_form":form})