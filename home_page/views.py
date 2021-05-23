import os

from django.http import JsonResponse
from django.shortcuts import render
import requests


def index(request):
    return render(request, 'home_page/index.html')


def request_bar_chart(request):
    response = requests.get('http://89.223.90.206:8000/api/ready_data/')
    if request.is_ajax():
        messages_bar_chart = response.json()
    else:
        pass
    return JsonResponse(messages_bar_chart)


def request_table(request):
    token_bd = os.environ['token_db']
    response = requests.get('http://89.223.90.206:8000/click_statistics/',
                            headers={"Authorization": "Token {}".format(token_bd)})
    if request.is_ajax():
        messages_table = response.json()
    else:
        pass
    return JsonResponse(messages_table, safe=False)
