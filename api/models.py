from django.db import models

# Create your models here.
class Sensor(models.Model):
  name= models.CharField(max_length=50)
  value = models.FloatField(default=0)

  def __str__(self):
    return self.name + " -> " + str(self.value)

  class Meta:
    ordering = ['value']