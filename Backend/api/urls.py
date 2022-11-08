
from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('ml/', views.result,name='ML Model'),
    path('question/post/', views.AddQuestion.as_view(), name='blogs_add'),
    path('question/<int:pk>/', views.QuestionDetail.as_view(), name='blog_detail'),
]

# h =
# {
# "Q1" : "check",
# "Q2" : "check",
# "Q3" : "check",
# "Q4" : "check",
# "Q5" : "check",
# "Q6" : "check",
# "Q7" : "check",
# "Q8" : "check",
# "Q9" : "check",
# "Q10" : "check",
# "Q11" : "check"
# }