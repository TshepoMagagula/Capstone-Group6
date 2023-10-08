import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
  filename:  './db.db',
  driver:  sqlite3.Database
});

// await db.migrate()

//API endpoint to insert patient data
// app.post('/insert-patient', (req, res) => {
//   const {
//     Name,
//     Surname,
//     Contact,
//     Ethnic_group,
//     Age,
//     Gender,
//     ChestPainType,
//     RestingBP,
//     Cholesterol,
//     FastingBPS,
//     RestingECG,
//     MaxHR,
//     ExerciseAngina,
//     Oldpeak,
//     ST_Slope,
//   } = req.body;

//   const insertPatientQuery = `
//     INSERT INTO Patient_General_Details (Name, Surname, Contact, Ethnic_group)
//     VALUES (?, ?, ?, ?);
//   `;

//   const insertTestQuery = `
//     INSERT INTO CAD_Test (
//       Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol,
//       FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope
//     )
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
//   `;

//   // Begin a transaction for better performance and data integrity
//   db.serialize(() => {
//     db.run('BEGIN TRANSACTION');

//     // Insert into Patient_General_Details table
//     db.run(
//       insertPatientQuery,
//       [Name, Surname, Contact, Ethnic_group],
//       function (err) {
//         if (err) {
//           console.error('Error inserting patient details:', err.message);
//           db.run('ROLLBACK');
//           res.status(500).json({ error: 'Failed to insert patient details' });
//         } else {
//           const patientId = this.lastID;

//           // Insert into CAD_Test table (or HF_Test, based on your API)
//           db.run(
//             insertTestQuery,
//             [
//               patientId, Age, Gender, ChestPainType, RestingBP, Cholesterol,
//               FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope,
//             ],
//             function (err) {
//               if (err) {
//                 console.error('Error inserting test details:', err.message);
//                 db.run('ROLLBACK');
//                 res.status(500).json({ error: 'Failed to insert test details' });
//               } else {
//                 // Commit the transaction
//                 db.run('COMMIT');
//                 res.status(200).json({ message: 'Patient data inserted successfully' });
//               }
//             }
//           );
//         }
//       }
//     );
//   });
// });



export const addUserForCAD = async (user) => {
  const { Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope } = user;
  console.log(user);
 const res = db.run('INSERT INTO CAD_Test (Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope) VALUES (?, ?, ?, ? , ?,?, ?, ?, ?, ? ,?, ?, ?)',[Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope]);
}

export const addUserForHF = async (user) => {
  const { Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope } = user;
  const res = db.run('INSERT INTO HF_Test (Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope) VALUES (?, ?, ?, ? , ?,?, ?, ?, ?, ? ,?, ?, ?)',[Test_ID, Patient_ID, Age, Gender, ChestPainType, RestingBP, Cholesterol, FastingBPS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope]);
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