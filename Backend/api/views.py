
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from api.serializer import  RegisterSerializer
from rest_framework import generics
from django.http import Http404
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from .models import Question
from .serializer import QuestionSerializer
import pickle
import joblib
from django.db import connection
import pandas as pd
from django.shortcuts import render
from sklearn.preprocessing import MinMaxScaler
from django.db.models.functions import Length


cursor = connection.cursor()
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer



def getPredictions(Gender, issues, Sleep_time, Feeling, Medication,
                   water_intake, screen_time, current_feeling, smoke_drink,
                   physical_activity, junk_food):

    # data = [[Gender, issues, Sleep_time, Feeling, Medication, water_intake,
    #          screen_time, current_feeling, smoke_drink, physical_activity, junk_food]]
    # train_df = pd.DataFrame(data, columns=['Gender', 'issues', 'Sleep_time', 'Feeling', 'Medication',
    #                                        'water_intake', 'screen_time', 'current_feeling', 'smoke_drink',
    #                                        'physical_activity', 'junk_food'])
    mdl1 = joblib.load('/Users/asadk/OneDrive/Desktop/OOAD/model1.pkl')
    mdl2 = joblib.load('/Users/asadk/OneDrive/Desktop/OOAD/model2.pkl')
    mdl3 = joblib.load('/Users/asadk/OneDrive/Desktop/OOAD/model3.pkl')
    mdl4 = joblib.load('/Users/asadk/OneDrive/Desktop/OOAD/model4.pkl')
    mdl5 = joblib.load('/Users/asadk/OneDrive/Desktop/OOAD/model5.pkl')
    # scaled = pickle.load(open('scaler.sav', 'rb'))
    # here have to add something
    train_df = pd.read_csv('/Users/asadk/OneDrive/Desktop/OOAD/performance.csv', encoding='latin-1')
    train_df.drop(['being_alone', 'color', 'music',
                  'yourself', 'food'], axis=1, inplace=True)

    new_row = {'Gender': Gender, 'issues': issues, 'Sleep_time': Sleep_time, 'Medication': Medication, 'water_intake': water_intake, 'screen_time': screen_time, 'smoke_drink': smoke_drink,
               'physical_activity': physical_activity, 'junk_food': junk_food}

    train_df = train_df.append(new_row, ignore_index=True)

    gender_train = pd.get_dummies(train_df.Gender)
    gender_train.columns = ['1_gen', '2_gen', '3_gen']
    sleep_train = pd.get_dummies(train_df.Sleep_time)
    sleep_train.columns = ['1_slot', '2_slot', '3_slot', '4_slot', '5_slot']
    feeling_train = pd.get_dummies(train_df.Feeling)
    feeling_train.columns = ['1_feel', '2_feel', '3_feel', '4_feel']
    med_train = pd.get_dummies(train_df.Medication)
    med_train.columns = ['Yes', 'No']
    water_intake_train = pd.get_dummies(train_df.water_intake)
    water_intake_train.columns = ['1_case', '2_case', '3_case']
    screen_intake_train = pd.get_dummies(train_df.screen_time)
    screen_intake_train.columns = ['1_case', '2_case', '3_case']
    current_feeling = pd.get_dummies(train_df.current_feeling)
    current_feeling.columns = ['1_case', '2_case', '3_case', '4_case']
    physical_activity = pd.get_dummies(train_df.physical_activity)
    physical_activity.columns = ['1_case', '2_case', '3_case']
    junk_food = pd.get_dummies(train_df.junk_food)
    junk_food.columns = ['1_case', '2_case', '3_case']
    smoke_drink = pd.get_dummies(train_df.smoke_drink)
    smoke_drink.columns = ['1_case', '2_case', '3_case', '4_case']
    train_df = pd.concat([train_df, feeling_train, med_train,
                         water_intake_train, screen_intake_train, physical_activity], axis=1)
    # prediction = model.predict(scaled.transform([
    #     [Gender, issues, Sleep_time, Feeling, Medication,
    #    water_intake, screen_time, current_feeling, smoke_drink,
    #    physical_activity, junk_food, being_alone, color, music,
    #    yourself, food]
    # ]))

    train_df.drop(['Gender', 'issues', 'Sleep_time', 'Feeling', 'Medication',
                   'water_intake', 'screen_time', 'current_feeling', 'smoke_drink',
                   'physical_activity', 'junk_food'], axis=1, inplace=True)

    sc = MinMaxScaler(feature_range=(0, 1))
    train_df = sc.fit_transform(train_df)

    y_pred1 = mdl1.predict(train_df)
    y_pred2 = mdl2.predict(train_df)
    y_pred3 = mdl3.predict(train_df)
    y_pred4 = mdl4.predict(train_df)
    y_pred5 = mdl5.predict(train_df)

    blissful = 0
    fear = 0
    angry = 0
    depression = 0
    anxiety = 0

    if (y_pred1[y_pred1.size - 1] == 4):
        blissful += 1
    elif (y_pred1[y_pred1.size - 1] == 1):
        anxiety += 1
    elif (y_pred1[y_pred1.size - 1] == 3):
        angry += 1
    elif (y_pred1[y_pred1.size - 1] == 0):
        fear += 1
    elif (y_pred1[y_pred1.size - 1] == 2):
        depression += 1

    if (y_pred2[y_pred1.size - 1] == 3):
        blissful += 1
    elif (y_pred2[y_pred1.size - 1] == 4):
        fear += 1
    elif (y_pred2[y_pred1.size - 1] == 1):
        depression += 1
    elif (y_pred2[y_pred1.size - 1] == 0):
        anxiety += 1
    elif (y_pred2[y_pred1.size - 1] == 2):
        angry += 1

    if (y_pred4[y_pred1.size - 1] == 3):
        blissful += 1
    elif (y_pred4[y_pred1.size - 1] == 1):
        depression += 1
    elif (y_pred4[y_pred1.size - 1] == 2):
        anxiety += 1

    elif (y_pred3[y_pred1.size - 1] == 1):
        depression += 1
    elif (y_pred3[y_pred1.size - 1] == 2):
        anxiety += 1
    elif (y_pred3[y_pred1.size - 1] == 0):
        blissful += 1

    if y_pred5[y_pred1.size - 1] == 3:
        blissful += 1
    elif y_pred5[y_pred1.size - 1] == 4:
        fear += 1
    elif y_pred5[y_pred1.size - 1] == 1:
        anxiety += 1
    elif y_pred5[y_pred1.size - 1] == 0:
        depression += 1
    elif y_pred5[y_pred1.size - 1] == 2:
        angry += 1
    elif y_pred5[y_pred1.size - 1] == 5:
        depression += 1

    state = max(blissful, fear, depression, angry, anxiety)

    if (state == blissful):
        answer = 0
    elif (state == fear):
        answer = 1
    elif (state == depression):
        answer = 2
    elif (state == angry):
        answer = 3
    elif (state == anxiety):
        answer = 4
    print(answer)
    return answer

@api_view(["GET"])
def result(response):

    question = Question.objects.get(pk=3)
    query = "SELECT * FROM api_question"
    cursor.execute(query)
    result = cursor.fetchall()
    print("AAAAAAAAAAA")
    print(result[-1])
    y_pred = getPredictions(question.Q1, question.Q2, question.Q3,
     question.Q4, question.Q5 ,question.Q6, question.Q7, question.Q8,
      question.Q9,question.Q10,question.Q11 )
    state  = "mental"
    newdf=pd.DataFrame([{y_pred : state}])
    newdf=newdf.replace({True:'Approved', False:'Rejected'})
    return JsonResponse('Your Status is {}'.format(newdf), safe=False)
    # Gender = int(request.GET['Gender'])
    # issues = int(request.GET['issues'])
    # Sleep_time = int(request.GET['Sleep_time'])
    # Feeling = int(request.GET['Feeling'])
    # Medications = int(request.GET['Medications'])
    # water_intake = int(request.GET['water_intake'])
    # screen_time = int(request.GET['screen_time'])
    # current_feeling = int(request.GET['current_feeling'])
    # smoke_drink = int(request.GET['smoke_drink'])
    # physical_activity = int(request.GET['physical_activity'])
    # junk_food = int(request.GET['junk_food'])
class QuestionDetail(APIView):
    
    def get_object(self, pk):
        try:
            return Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        blog = self.get_object(pk)
        serializer = QuestionSerializer(blog)
        return Response(serializer.data)

    @permission_classes([IsAuthenticated])
    def put(self, request, pk, format=None):
        blog = self.get_object(pk)
        serializer = QuestionSerializer(blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @permission_classes([IsAuthenticated])
    def delete(self, request, pk, format=None):
        blog = self.get_object(pk)
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AddQuestion(APIView):
    """
    Create a new Question
    """
    def post(self, request, format=None):
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)