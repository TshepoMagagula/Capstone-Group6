import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
  filename:  './db.db',
  driver:  sqlite3.Database
});

await db.migrate()

export const addUserForCAD = async (user) => {
  const { Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, Fluoroscopy, defectType  } = user;
  console.log(user);
 const res = db.run('INSERT INTO CAD_Test (Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, Fluoroscopy, defectType) VALUES (?, ?, ?, ? , ?,?, ?, ?, ?, ? ,?, ?, ?, ?, ?)',[Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, Fluoroscopy, defectType]);
}

export const addUserForHF = async (user) => {
  const { Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, Fluoroscopy, defectType } = user;
  const res = db.run('INSERT INTO HF_Test (Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, Fluoroscopy, defectType) VALUES (?, ?, ?, ? , ?,?, ?, ?, ?, ? ,?, ?, ?, ?, ?)',[Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, Fluoroscopy, defectType]);
  }

  export const getCADTestDataByPatientId = async (id)=> {
    const sql = `select * from CAD_Test where Patient_ID = ?`;
    const result = await db.all(sql, [id]);
    return result;
  }

  
  export const findCADTestData = async (id)=> {
    const sql = `select * from CAD_Test`;
    const result = await db.all(sql);
    return result
  }

  export async function findPatientByID(Patient_ID){
    const sql="select * from CAD_Test where Patient_ID=?";
    return db.all(sql,Patient_ID)
  }
