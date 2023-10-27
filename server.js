import express from 'express';
import cors from 'cors';
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

import { addUserForCAD, addUserForHF, getCADTestDataByPatientId, findCADTestData, findPatientByID } from './db.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const db = await sqlite.open({
    filename: './db.db',
    driver: sqlite3.Database
});

await db.migrate();

app.post('/api/post/userCAD', async (req, res) => {
    // const { age,sex } = req.body;
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);




    //get the id from the user interface
    const Patient_ID = req.body.Patient_ID
    //with the id search patient historical data from database
    const results = await findPatientByID(Patient_ID);

    // db stuff
    /*if (req.body)
        addUserForCAD(req.body);
    
    res.json({
        message: 'success'
    })*/
    //bellow
    //if results is available then pass the massage success or else no data available for this patient
    //
    if (results) {
        res.json({
            message: "success",
            results
        })
    }
    else {
        res.json({
            error: "No data available for this patient"
        })

    }

})



app.get('/api/get/userCAD/:patientId', async (req, res) => {
    const { patientId } = req.params;
    const result = await getCADTestDataByPatientId(patientId)
    res.json({
        body: result
    })
})
app.get('/api/get/userCAD/', async (_, res) => {
    const results = await findCADTestData();
    res.json({
        body: results
    })
})

// function viewPatientHistory() {
//     // Assuming patientId is obtained or set elsewhere in your code
//     const patientId = '1';
// }

// heart failure routes

app.post('/api/post/userHF', async (req, res) => {
    // const { age,sex } = req.body;
    console.log(req.body);


    if (req.body)
        addUserForHF(req.body);
})

// app.post('/api/add/userCAD', async (req, res)=>{
//     console.log(req.body);
//     console.log(req.params);
//     console.log(req.query); 
//     const results = await addUserForCAD();
// } )
app.post('/api/add/userCAD', async (req, res) => {
    // const { age,sex } = req.body;

    // db stuff
    if (req.body)
        addUserForCAD(req.body);
    res.json({
        message: 'success'
    })
})

// Start the server
const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
