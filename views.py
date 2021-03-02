from django.shortcuts import render
from rest_framework import generics
from .models import Users
from django.http import HttpResponse
from .serializers import UserSerializer
# Create your views here.

def index(request):
    data=Users.objects.all()
    data_dict={'access_records': data}
    return render(request,'index.html',context=data_dict)

class UserList(generics.ListCreateAPIView):
    queryset=Users.objects.all()
    serializer_class=UserSerializer
