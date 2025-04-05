from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListView.as_view(), name = 'company-list-create'),
    path('vacancies/', views.VacancyListView.as_view(), name = 'vacancy-list-create'),
    path('companies/<int:id>/', views.CompanyDetailsByIdView.as_view(), name = 'company-by-id'),
    path('companies/<int:id>/vacancies/', views.CompanyVacancyListlView.as_view(), name = 'company-vacancy-list'),
    path('vacancies/<int:id>/', views.VacancyDetailByIdView.as_view(), name = 'vacancy-by-id'),
    path('vacancies/top_ten/', views.VacancyTopView.as_view(), name = 'vacancies-top-ten')

]