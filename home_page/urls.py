from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('request_bar_chart', views.request_bar_chart, name='request_bar_chart'),
    path('request_table', views.request_table, name='request_table'),
]

