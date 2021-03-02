from django.contrib import admin
from .models import Users,enroll,courses
# Register your models here.
admin.site.register(Users)
admin.site.register(enroll)
admin.site.register(courses)
