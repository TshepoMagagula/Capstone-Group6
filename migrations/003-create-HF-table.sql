-- Create the HF_Test table
CREATE TABLE   HF_Test (
    Test_ID INT  PRIMARY KEY,

    Patient_ID INT REFERENCES Patient_General_Details(Patient_ID),
   
    Age INT,
    Gender VARCHAR(255),
    ChestPainType VARCHAR(255),
    Fluoroscopy VARCHAR(255),
    defectType VARCHAR(255),
    RestingBP INT,
    Cholesterol INT,
    FastingBPS INT,
    RestingECG VARCHAR(255),
    MaxHR INT,
    ExerciseAngina VARCHAR(255),
    Oldpeak FLOAT,
    ST_Slope VARCHAR(255)
);