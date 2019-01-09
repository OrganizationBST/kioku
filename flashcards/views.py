from django.http import HttpResponse
from django.shortcuts import render

from .models import Flashcard
from .models import Admin
from .models import User

# Create your views here.
def index(request):
    user_list = User.objects.all()
    # dictionary mapping template variable names to Python objects
    context = {
        'user_list': user_list,
    }
    # return HttpResponse(template.render(context, request))
    return render(request, 'flashcards/index.html', context)