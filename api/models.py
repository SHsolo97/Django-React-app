from django.db import models

# Create your models here.
class Users(models.Model):
    email = models.CharField(max_length=100,unique=True)
    password=models.CharField(max_length=50)
    fullName=models.CharField(max_length=50)
    date=models.DateField()
    
    def __str__(self):
        return self.email

class courses(models.Model):
    code=models.CharField(max_length=15)
    title=models.CharField(max_length=50)
    img=models.CharField(max_length=300)
    credit=models.IntegerField(null=False)
    description=models.CharField(max_length=200)

    def __str__(self):
        return self.code

class enroll(models.Model):
    email=models.ForeignKey(Users,on_delete=models.CASCADE)
    code=models.ForeignKey(courses,on_delete=models.CASCADE)

    def __str__(self):
        return self.code
