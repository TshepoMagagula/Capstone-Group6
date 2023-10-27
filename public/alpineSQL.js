document.addEventListener("alpine:init", () => {
    Alpine.data('CAD', () => {
        return {
            Patient_ID: '',
            Name: '',
            Surname: '',
            Contact: '',
            Ethnic_group: '',
            Test_ID: '',
            Age: '',
            Gender: '',
            ChestPainType: '',
            RestingBP: '',
            FastingBPS: '',
            RestingECG: '',
            MaxHR: '',
            ExerciseAngina: '',
            Oldpeak: '',
            ST_Slope: '',
            Fluoroscopy:'',
            Cholesterol: '',
            defectType:'',
            patientHistory: '',
            historicalPatientData:[],
            // HeartDisease:'',
            // CAD_class:'',

            init() {
                return axios

            },

            addCADUser() {
                console.log(this.Test_ID),
                    console.log(this.Patient_ID),
                    console.log(this.Age),
                    console.log(this.Gender),
                    console.log(this.ChestPainType),
                    console.log(this.RestingBP),
                    console.log(this.Cholesterol),
                    console.log(this.FastingBPS),
                    console.log(this.RestingECG),
                    console.log(this.MaxHR),
                    console.log(this.ExerciseAngina),
                    console.log(this.Oldpeak),
                    console.log(this.ST_Slope),
                    console.log(this.Fluoroscopy),
                    console.log(this.defectType)
                    axios.post('/api/add/userCAD', {

                        Test_ID: this.Test_ID,
                        Patient_ID: this.Patient_ID,
                        Age: this.Age,
                        Gender: this.Gender,
                        ChestPainType: this.ChestPainType,
                        RestingBP: this.RestingBP,
                        Cholesterol: this.Cholesterol,
                        FastingBPS: this.FastingBPS,
                        RestingECG: this.RestingECG,
                        MaxHR: this.MaxHR,
                        ExerciseAngina: this.ExerciseAngina,
                        Oldpeak: this.Oldpeak,
                        ST_Slope: this.ST_Slope,
                        defectType: this.defectType,
                        Fluoroscopy: this.Fluoroscopy,
                    })
            },

            getCADTestDataByPatientId() {

                axios.get(`/api/get/userCAD/${Patient_ID}`, {

                    Test_ID: this.Test_ID,
                    Patient_ID: this.Patient_ID,
                    Age: this.Age,
                    Gender: this.Gender,
                    ChestPainType: this.ChestPainType,
                    RestingBP: this.RestingBP,
                    Cholesterol: this.Cholesterol,
                    FastingBPS: this.FastingBPS,
                    RestingECG: this.RestingECG,
                    MaxHR: this.MaxHR,
                    ExerciseAngina: this.ExerciseAngina,
                    Oldpeak: this.Oldpeak,
                    ST_Slope: this.ST_Slope,
                    defectType: this.defectType,
                    Fluoroscopy: this.Fluoroscopy,
                }).then(res => {
                    console.log(res.data.body);
                    this.patientHistory;

                })
            },
            getPatientHistoricalData(){
                console.log(this.Patient_ID)
                axios.post('/api/post/userCAD',
                {
                    Patient_ID:this.Patient_ID
                }).then((result=>{
                   if(result.data.message==="success"){
                    console.log(result.data.results)
                    this.historicalPatientData=result.data.results
                   }
                   else{
                    alert(result.data.error)
                   }
                }))
            },

            findCADTestData() {

                axios.get('/api/get/userCAD/', {

                    Test_ID: this.Test_ID,
                    Patient_ID: this.Patient_ID,
                    Age: this.Age,
                    Gender: this.Gender,
                    ChestPainType: this.ChestPainType,
                    RestingBP: this.RestingBP,
                    Cholesterol: this.Cholesterol,
                    FastingBPS: this.FastingBPS,
                    RestingECG: this.RestingECG,
                    MaxHR: this.MaxHR,
                    ExerciseAngina: this.ExerciseAngina,
                    Oldpeak: this.Oldpeak,
                    ST_Slope: this.ST_Slope,
                    defectType: this.defectType,
                    Fluoroscopy: this.Fluoroscopy,
                }).then(res => {
                    console.log(res.data.body);
                    this.patientHistory;

                })
            },
        }
    })
})