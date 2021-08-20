from rest_framework import serializers
from .models import User, Artist, Gallery, Expo, GalleryExpo

class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User
        fields = '__all__'

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:

        model = Artist
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):

    class Meta:

        model = Gallery
        fields = '__all__'

class ExpoSerializer(serializers.ModelSerializer):

    class Meta:

        model = Expo
        fields = '__all__'

class GalleryExpoSerializer(serializers.ModelSerializer):

    class Meta:

        model = GalleryExpo
        fields = '__all__'