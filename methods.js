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
            showResultP_HF: false,
            showResultN_HF: false,
            showResultN_CAD: false,
            showResultP1_CAD: false,
            showResultP2_CAD: false,
            showResultP3_CAD: false,
            showResultP4_CAD: false,
            HF_modelShow: false,
            occupation: '',

            viewInput() {
                console.log(this.age_CAD + this.sex_CAD + this.cp_CAD + this.trestbps_CAD + 
                    this.chol_CAD +this.fbs_CAD + this.restecg_CAD + this.thalach_CAD + 
                    this.exang_CAD + this.oldpeak_CAD, this.slope_CAD +  this.ca_CAD, this.thal_CAD
                )
            },

            testCAD() {
                return axios
                    .post(`/CADpredict`, 
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
                        localStorage['modelResult'] = this.result_CAD.modelResult;
                        localStorage['result'] = this.result_CAD.result;
                        if(this.result_CAD.modelResult == 1) {
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
                            this.showResultN = true
                            localStorage['showResultP4_CAD'] = this.showResultP4_CAD
                        }
                        console.log(this.result_CAD)

                    })
            },

            testHF() {
                return axios
                    .post(`/ml/HFpredict`, 
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
                        localStorage['modelResult'] = this.result_HF.modelResult;
                        localStorage['result'] = this.result_HF.result;
                        if(this.result_HF.modelResult == 1) {
                            this.showResultP = true
                            localStorage['showResultP'] = this.showResultP
                        }
                        else {
                            this.showResultN = true
                            localStorage['showResultN'] = this.showResultN
                        }
                        console.log(this.result_HF)
                    })
            },

            login() {
                if (this.occupation == 'Cardiologist') {
                    this.HF_modelShow = true
                }
                else {
                    this.HF_modelShow = false
                }
                localStorage['occupation'] = this.occupation
                window.location.href = "index.html";
            }
        }
    })
})