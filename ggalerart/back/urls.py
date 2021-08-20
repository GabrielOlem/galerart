from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^users/$', views.UserList.as_view(), name='user-list'),
    url(r'^user/(?P<pk>[0-9]+)/$', views.UserDetail.as_view(), name='user-detail'),

    url(r'^artists/$', views.ArtistList.as_view(), name='artist-list'),
    url(r'^artist/(?P<pk>[0-9]+)/$', views.ArtistDetail.as_view(), name='artist-detail'),

    url(r'^galleries/$', views.GalleryList.as_view(), name='gallery-list'),
    url(r'^gallery/(?P<pk>[0-9]+)/$', views.GalleryDetail.as_view(), name='gallery-detail'),

    url(r'^expos/$', views.ExpoList.as_view(), name='expo-list'),
    url(r'^expo/(?P<pk>[0-9]+)/$', views.ExpoDetail.as_view(), name='expo-detail'),

    url(r'^galleryexpos/$', views.GalleryExpoList.as_view(), name='galleryexpo-list'),
    url(r'^galleryexpo/(?P<pk>[0-9]+)/$', views.GalleryExpoDetail.as_view(), name='galleryexpo-detail'),

    url(r'^arts/$', views.ArtList.as_view(), name='art-list'),
    url(r'^art/(?P<pk>[0-9]+)/$', views.ArtDetail.as_view(), name='art-detail'),
]