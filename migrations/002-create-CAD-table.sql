-- Create the CAD-Test table
CREATE TABLE CAD_Test (
    Test_ID INT  PRIMARY KEY,
    Patient_ID Int REFERENCES Patient_General_Details(Patient_ID),
    Age INT,
    Gender VARCHAR(255),
    ChestPainType VARCHAR(255),

    RestingBP INT,
    Cholesterol INT,
    FastingBPS INT,
    RestingECG VARCHAR(255),
    MaxHR INT,
    ExerciseAngina VARCHAR(255),
    Oldpeak FLOAT,
    ST_Slope VARCHAR(255)
);

ALTER TABLE CAD_Test
ADD Fluoroscopy VARCHAR(255);

ALTER TABLE CAD_Test
ADD defectType VARCHAR(255);