from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.core.serializers import serialize
from django.http import JsonResponse


from .models import Product


def index(request):
    products = Product.objects.select_related('tax_category').all
    template = loader.get_template("products/products_list.html")
    context = {"products": products}

    return HttpResponse(template.render(context, request))


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def example(request, format=None):
    content = {
        'user': str(request.user),  # `django.contrib.auth.User` instance.
        'email': str(request.user.email),
        'auth': str(request.auth),  # None
    }
    return Response(content)


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def get_all(request):
    products = list(Product.objects.select_related('tax_category').values())
    # data = serialize("json", products)

    # print(JsonResponse(data))
    return JsonResponse(products, safe=False)
