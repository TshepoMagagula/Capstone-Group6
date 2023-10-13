from flask import request, Flask, render_template;
from flask_cors import CORS;
from sklearn.preprocessing import StandardScaler
import pickle;
import _json;
from werkzeug.utils import secure_filename;
import os;

app = Flask(__name__)
modelCAD = pickle.load(open('./modelCAD.pkl', 'rb'))
modelHF = pickle.load(open('./modelHF.pkl', 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))
scalerCAD = pickle.load(open('scalerCAD.pkl', 'rb')) 
CORS(app)

@app.post ("/CADpredict")
def cadPredict():
    patientResult = {
        0: 'Negative',
        1: 'Early',
        2: 'Advanced',
        3: 'Severe',
        4: 'Fatal'  
    }
    
    # age = request.form.get('age')
    # sex = request.form.get('sex')
    # cp = request.form.get('cp')
    # trestbps = request.form.get('trestbps')
    # chol = request.form.get('chol')
    # fbs = request.form.get('fbs')
    # restecg = request.form.get('restecg')
    # thalach = request.form.get('thalach')
    # exang = request.form.get('exang')
    # oldpeak = request.form.get('oldpeak')
    # slope = request.form.get('slope')
    # ca = request.form.get('ca')
    # thal = request.form.get('thal')
    
    # print('Age:', age)
    
    
    input_data = request.get_json()
    print(input_data)
    # [[age, sex, cp, trestbps, chol, fbs, restecg, 
                #   thalach, exang, oldpeak, slope, ca, thal]]
    input_values = [input_data['age'], input_data['sex'], input_data['cp'], input_data['trestbps'], input_data['chol'], 
                    input_data['fbs'], input_data['restecg'], input_data['thalach'], input_data['exang'],
                    input_data['oldpeak'], input_data['slope'], input_data['ca'],  input_data['thal']]
    scaled_input_data = scalerCAD.transform([input_values])
    prediction = modelCAD.predict(scaled_input_data)
    print('Prediction:', prediction)
    modelOutput = prediction[0]
    
    return {
        'modelResult': str(modelOutput),
        'result': patientResult[modelOutput] 
    }
    
@app.route('/ml/HFpredict', methods=['POST'])
def predictHF():
    patientResults = {
        0: 'Negative',
        1: 'Positive'  
    }
    
    # age = request.form.get('age')
    # anaemia = request.form.get('anaemia')
    # creatinine_phosphokinase = request.form.get('creatinine_phosphokinase')
    # diabetes = request.form.get('diabetes')
    # ejection_fraction = request.form.get('ejection_fraction')
    # high_blood_pressure	 = request.form.get('high_blood_pressure')
    # platelets = request.form.get('platelets')
    # serum_creatinine = request.form.get('serum_creatinine')
    # serum_sodium = request.form.get(' serum_sodium')
    # sex = request.form.get('sex')
    # smoking = request.form.get('smoking')
    # time = request.form.get('time')
    
    input_data = request.get_json()
    print(input_data)
    
    input_values = [input_data['age'], input_data['anaemia'], input_data['creatinine_phosphokinase'],
                    input_data['diabetes'], input_data['ejection_fraction'], input_data['high_blood_pressure'],
                    input_data['platelets'], input_data['serum_creatinine'], input_data['serum_sodium'],
                    input_data['sex'], input_data['smoking'], input_data['time']]
    
    scaled_input_data = scaler.transform([input_values])
    predict = modelHF.predict(scaled_input_data)
    print('Prediction:', predict)
    
    # prediction = modelHF.predict([[age, anaemia, creatinine_phosphokinase, diabetes, ejection_fraction, high_blood_pressure, 
    #                              platelets,serum_creatinine, serum_sodium, sex, smoking, time]])
    modelResult = predict[0]
    
    return {
        'modelResult': str(modelResult),
        'result': patientResults[modelResult] 
    }
    

    