document.addEventListener("alpine:init", () => {
    
    Alpine.data('heartBeatBackEnd', () => {
        return{
            age_CAD: 0,
            sex_CAD: 0,
            cp_CAD: 0,
            trestbps_CAD: 0,
            chol_CAD: 0,
            fbs_CAD: 0,
            restecg_CAD: 0,
            thalach_CAD: 0,
            exang_CAD: 0,
            oldpeak_CAD: 0.0,
            slope_CAD: 0,
            ca_CAD: 0,
            thal_CAD: 0,
            result_CAD: 0,
            modelResult_CAD: 0,
            age_HF: 0,
            sex_HF: 0,
            anaemia_HF: 0,
            creatinine_phosphokinase_HF: 0,
            diabetes_HF: 0,
            ejection_fraction_HF: 0,
            high_blood_pressure_HF: 0,
            platelets_HF: 0.0,
            serum_creatinine_HF: 0.0,
            serum_sodium_HF: 0.0,
            smoking_HF: 0,
            time_HF: 0,
            modelResult_HF: 0,
            result_HF: 0,
            url: 'http://127.0.0.1:5000',
            /* showResultP_HF: false,
            showResultN_HF: false,
            showResultN_CAD: false,
            showResultP1_CAD: false,
            showResultP2_CAD: false,
            showResultP3_CAD: false,
            showResultP4_CAD: false, */
            HF_modelShow: false,
            occupation: '',

            viewInput() {
                console.log(this.age_CAD + this.sex_CAD + this.cp_CAD + this.trestbps_CAD + 
                    this.chol_CAD +this.fbs_CAD + this.restecg_CAD + this.thalach_CAD + 
                    this.exang_CAD + this.oldpeak_CAD, this.slope_CAD +  this.ca_CAD, this.thal_CAD
                )
            },

            testCAD() {
                if(!this.age_CAD && !this.sex_CAD && !this.cp_CAD && !this.trestbps_CAD && 
                    !this.chol_CAD && !this.fbs_CAD && !this.restecg_CAD && !this.thalach_CAD && 
                    !this.exang_CAD && !this.oldpeak_CAD && !this.slope_CAD && !this.ca_CAD && !this.thal_CAD) {
                        alert("Some important data is missing. Make sure all the input fields have values")
                }
                else {
                    return axios
                    .post(`https://ml-api-3624.onrender.com/CADpredict`, 
                    {
                        "age" : this.age_CAD,
                        "sex" : this.sex_CAD,
                        "cp" : this.cp_CAD,
                        "trestbps" : this.trestbps_CAD,
                        "chol" : this.chol_CAD,
                        "fbs" : this.fbs_CAD,
                        "restecg" : this.restecg_CAD,
                        "thalach" : this.thalach_CAD,
                        "exang" : this.exang_CAD,
                        "oldpeak" : this.oldpeak_CAD,
                        "slope" : this.slope_CAD,
                        "ca" : this.ca_CAD,
                        "thal": this.thal_CAD

                    })
                    .then(result => {
                        this.result_CAD = result.data;
                        localStorage['modelResult_CAD'] = this.result_CAD.modelResult;
                        localStorage['result_CAD'] = this.result_CAD.result;
                        /* if(this.result_CAD.modelResult == 1) {
                            this.showResultP1_CAD = true
                            localStorage['showResultP1_CAD'] = this.showResultP1_CAD
                        }
                        else if(this.result_CAD.modelResult == 2){
                            this.showResultP2_CAD = true
                            localStorage['showResultP2_CAD'] = this.showResultP2_CAD
                        }
                        else if(this.result_CAD.modelResult == 3){
                            this.showResultP3_CAD = true
                            localStorage['showResultP3_CAD'] = this.showResultP3_CAD
                        }
                        else if(this.result_CAD.modelResult == 4){
                            this.showResultP4_CAD = true
                            localStorage['showResultP4_CAD'] = this.showResultP4_CAD
                        }
                        else {
                            this.showResultN_CAD = true
                            localStorage['showResultN_CAD'] = this.showResultN_CAD
                        } */
                        console.log(this.result_CAD)

                    })
                }
                
            },

            testHF() {
                return axios
                    .post(`https://ml-api-3624.onrender.com/ml/HFpredict`, 
                    {
                        "age" : this.age_HF,
                        "anaemia" : this.anaemia_HF,
                        "creatinine_phosphokinase" : this.creatinine_phosphokinase_HF,
                        "diabetes" : this.diabetes_HF,
                        "ejection_fraction" : this.ejection_fraction_HF,
                        "high_blood_pressure" : this.high_blood_pressure_HF,
                        "platelets" : this.platelets_HF,
                        "serum_creatinine" : this.serum_creatinine_HF,
                        "serum_sodium" : this.serum_sodium_HF,
                        "sex" : this.sex_HF,
                        "smoking" : this.smoking_HF,
                        "time" : this.time_HF
                    })
                    .then(result => {
                        this.result_HF = result.data;
                        localStorage['modelResult_HF'] = this.result_HF.modelResult;
                        localStorage['result_HF'] = this.result_HF.result;
                        /* if(this.result_HF.modelResult == 1) {
                            this.showResultP_HF = true
                            localStorage['showResultP_HF'] = this.showResultP_HF
                        }
                        else {
                            this.showResultN_HF = true
                            localStorage['showResultN_HF'] = this.showResultN_HF
                        } */
                        console.log(this.result_HF)
                    })
            },

            login() {
                
                localStorage['occupation'] = this.occupation;
                window.location.href = "home.html";
            },
            
            logout() {
                this.age_CAD = 0;
                this.sex_CAD = 0;
                this.cp_CAD = 0;
                this.trestbps_CAD = 0;
                this.chol_CAD = 0;
                this.fbs_CAD = 0;
                this.restecg_CAD = 0;
                this.thalach_CAD = 0;
                this.exang_CAD = 0;
                this.oldpeak_CAD = 0.0;
                this.slope_CAD = 0;
                this.ca_CAD = 0;
                this.thal_CAD = 0;
                this.result_CAD = 0;
                this.age_HF = 0;
                this.sex_HF = 0;
                this.anaemia_HF = 0;
                this.creatinine_phosphokinase_HF = 0;
                this.diabetes_HF = 0;
                this.ejection_fraction_HF = 0;
                this.high_blood_pressure_HF = 0;
                this.platelets_HF = 0.0;
                this.serum_creatinine_HF = 0.0;
                this.serum_sodium_HF = 0.0;
                this.smoking_HF = 0;
                this.time_HF = 0;
                this.modelResult_HF = 0;
                this.result_HF = 0;
                /* this.showResultP_HF = false;
                this.showResultN_HF = false;
                this.showResultN_CAD = false;
                this.showResultP1_CAD = false;
                this.showResultP2_CAD = false;
                this.showResultP3_CAD = false;
                this.showResultP4_CAD = false; */
                this.HF_modelShow = false;
                this.occupation = '';
                localStorage['modelResult_HF'] = '';
                localStorage['result_HF'] = '';
               /*  localStorage['showResultN_HF']= false;
                localStorage['showResultP_HF']= false; */
                localStorage['modelResult_CAD'] = '';
                localStorage['result_CAD'] = '';
                /* localStorage['showResultP1_CAD'] = false;
                localStorage['showResultP2_CAD'] = false;
                localStorage['showResultP3_CAD'] = false;
                localStorage['showResultP4_CAD'] = false;
                localStorage['showResultN_CAD'] = false; */
                window.location.href = "index.html";
            },

            home() {
                this.age_CAD = 0;
                this.sex_CAD = 0;
                this.cp_CAD = 0;
                this.trestbps_CAD = 0;
                this.chol_CAD = 0;
                this.fbs_CAD = 0;
                this.restecg_CAD = 0;
                this.thalach_CAD = 0;
                this.exang_CAD = 0;
                this.oldpeak_CAD = 0.0;
                this.slope_CAD = 0;
                this.ca_CAD = 0;
                this.thal_CAD = 0;
                this.result_CAD = 0;
                this.age_HF = 0;
                this.sex_HF = 0;
                this.anaemia_HF = 0;
                this.creatinine_phosphokinase_HF = 0;
                this.diabetes_HF = 0;
                this.ejection_fraction_HF = 0;
                this.high_blood_pressure_HF = 0;
                this.platelets_HF = 0.0;
                this.serum_creatinine_HF = 0.0;
                this.serum_sodium_HF = 0.0;
                this.smoking_HF = 0;
                this.time_HF = 0;
                this.modelResult_HF = 0;
                this.result_HF = 0;
                localStorage['modelResult_HF'] = '';
                localStorage['result_HF'] = '';
                localStorage['modelResult_CAD'] = '';
                localStorage['result_CAD'] = '';
                window.location.href = "home.html";
            }
        }
    })
})