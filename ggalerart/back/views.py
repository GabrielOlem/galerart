from .models import User, Artist, Gallery, Expo, GalleryExpo, Art, FinalUser
from .serializers import UserSerializer, ArtistSerializer, GallerySerializer, ExpoSerializer, GalleryExpoSerializer, ArtSerializer, FinalUserSerializer
from rest_framework import generics
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_condition import Or
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope, OAuth2Authentication
from rest_framework.authentication import SessionAuthentication



class UserList(generics.ListCreateAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'

class ArtistList(generics.ListCreateAPIView):

    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class ArtistDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'

class GalleryList(generics.ListCreateAPIView):

    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'

class GalleryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'

class ExpoList(generics.ListCreateAPIView):

    queryset = Expo.objects.all()
    serializer_class = ExpoSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class ExpoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expo.objects.all()
    serializer_class = ExpoSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'
    
class GalleryExpoList(generics.ListCreateAPIView):

    queryset = GalleryExpo.objects.all()
    serializer_class = GalleryExpoSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class GalleryExpoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = GalleryExpo.objects.all()
    serializer_class = GalleryExpoSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'

class ArtList(generics.ListCreateAPIView):

    queryset = Art.objects.all()
    serializer_class = ArtSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class ArtDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Art.objects.all()
    serializer_class = ArtSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'

class FinalUserList(generics.ListCreateAPIView):

    queryset = FinalUser.objects.all()
    serializer_class = FinalUserSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class FinalUserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FinalUser.objects.all()
    serializer_class = FinalUserSerializer
    authentication_classes = []
    permission_classes = []
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'