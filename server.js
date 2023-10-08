import express from 'express';
import cors from 'cors';

import { addUserForCAD,addUserForHF } from './db.js';

const app = express();
const PORT = 3011

app.use(express.json());
app.use(cors())


app.post('/api/add/userCAD', async (req, res) => {
    // const { age,sex } = req.body;
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);

    // db stuff
    if (req.body)
        addUserForCAD(req.body);
    
    res.json({
        message: 'success'
    })
})

app.post('/api/add/userHF', async (req, res) => {
    // const { age,sex } = req.body;
    console.log(req.body);
    

    if (req.body)
        addUserForHF(req.body);
})

app.get('/api/get/userCAD/:patientId', async (req, res)=> {
    const { patientId} = req.params;
    const result = await getCADTestDataByPatientId(patientId)
    res.json({
        body: result
    })
})
app.get('/api/get/userCAD/', async (_, res)=> {
    const results = await findCADTestData();
    res.json({
        body: results
    })
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  