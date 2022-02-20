from django.shortcuts import render

def index(request):
    context = {
        'title': "Websocket + vue + django",
    }
    return render(request, 'index.html', context)