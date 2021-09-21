from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('FAQ', views.faqs, name='faqs'),
    path('dmca', views.dmca, name='dmca'),
    path('privacypolicy', views.privacy, name='privacy'),
    path('terms', views.terms, name='terms'),
    path('contact', views.contact, name='contact'),
    path('copyright', views.copy, name='copy'),
    path(r'download/', views.playlist_download, name='download'),
    path(r'upload/', views.playlist_upload, name='upload'),
    path(r'msg/<message>', views.msg, name='msg')

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)