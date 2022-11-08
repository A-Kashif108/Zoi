
import pickle
import joblib
import pandas as pd
from django.shortcuts import render
from sklearn.preprocessing import MinMaxScaler


mdl1 = joblib.load('model1.pkl')  
mdl2 = joblib.load('model2.pkl')
mdl3 = joblib.load('model3.pkl')
mdl4 = joblib.load('model4.pkl')
mdl5 = joblib.load('model5.pkl')

train_df = pd.read_csv('performance.csv', encoding='latin-1')
train_df.drop(['being_alone', 'color', 'music',
              'yourself', 'food'], axis=1, inplace=True)
# new_row = {'Gender': Gender, 'issues': issues, 'Sleep_time': Sleep_time, 'Medication': Medication, 'water_intake': water_intake, 'screen_time': screen_time, 'smoke_drink': smoke_drink,
#            'physical_activity': physical_activity, 'junk_food': junk_food}
# train_df = train_df.append(new_row, ignore_index=True)
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

if(y_pred1[y_pred1.size - 1] == 4):
    blissful+=1
elif(y_pred1[y_pred1.size - 1] == 1):
    anxiety+=1
elif(y_pred1[y_pred1.size - 1] == 3):
    angry+=1
elif(y_pred1[y_pred1.size - 1] == 0):
    fear+=1
elif(y_pred1[y_pred1.size - 1] == 2):
    depression+=1                

if(y_pred2[y_pred1.size - 1] == 3):
    blissful+=1
elif(y_pred2[y_pred1.size - 1] == 4):
    fear+=1
elif(y_pred2[y_pred1.size - 1] == 1):
    depression+=1
elif(y_pred2[y_pred1.size - 1] == 0):
    anxiety+=1
elif(y_pred2[y_pred1.size - 1] == 2):
    angry+=1

if(y_pred4[y_pred1.size - 1] == 3):
    blissful+=1
elif(y_pred4[y_pred1.size - 1] == 1):
    depression+=1
elif(y_pred4[y_pred1.size - 1] == 2):
    anxiety+=1


elif(y_pred3[y_pred1.size - 1] == 1):
    depression+=1
elif(y_pred3[y_pred1.size - 1] == 2):
    anxiety+=1
elif(y_pred3[y_pred1.size - 1] == 0):
    blissful+=1

if y_pred5[y_pred1.size - 1] == 3:
    blissful+=1
elif y_pred5[y_pred1.size - 1] == 4:
    fear+=1
elif y_pred5[y_pred1.size - 1] == 1:
    anxiety+=1
elif y_pred5[y_pred1.size - 1] == 0:
    depression+=1
elif y_pred5[y_pred1.size - 1] == 2:
    angry+=1
elif y_pred5[y_pred1.size - 1] == 5:    
    depression+=1

state = max(blissful , fear , depression , angry , anxiety)

if(state == anxiety):
    answer = 0
elif(state == fear):
    answer = 1
elif(state == depression):
    answer = 2
elif(state == angry):
    answer = 3 
elif(state == blissful):
    answer = 4


print(answer)