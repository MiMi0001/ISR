from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("all/", views.get_all),
    path("example/", views.example, name="example")
]

