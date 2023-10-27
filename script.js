const patientResult = 1;

// Update the patient's result in one of the boxes (0 to 4)
//document.getElementById(`result-${patientResult}`).textContent = "Patient's Name";

// You can add further JavaScript functionality as needed
const headerImage = document.getElementById('header-image');
const cadButton = document.getElementById('cad-button');
const heartFailureButton = document.getElementById('heart-failure-button');

// Function to change the header image
function changeHeaderImage(imagePath) {
    headerImage.style.opacity = 0;
    setTimeout(() => {
        headerImage.src = imagePath;
        headerImage.style.opacity = 1;
    }, 500);
}


// // Function to view patient history
// function viewPatientHistory() {
//     // Assuming patientId is obtained or set elsewhere in your code
//     const patientId = 'YOUR_PATIENT_ID_HERE';

//     // Fetch CAD test data for the specific patient
//     getCADTestDataByPatientId(patientId)
//         .then((patientHistory) => {
//             // Check if historical data is available
//             if (patientHistory.length === 0) {
//                 console.log('No historical data available for this patient');
//                 return;
//             }

//             // Handle the retrieved patientHistory data
//             console.log('CAD Test Data for Patient ID', patientId);
//             console.log(patientHistory);
//         })
//         .catch((error) => {
//             console.error('Error fetching patient history:', error);
//         });
// }

// // Function to fetch all CAD test data
// function fetchAllCADTestData() {
//     findCADTestData()
//         .then((allCADTestData) => {
//             // Check if CAD test data is available
//             if (allCADTestData.length === 0) {
//                 console.log('No CAD test data available');
//                 return;
//             }

//             // Handle the retrieved allCADTestData data
//             console.log('All CAD Test Data');
//             console.log(allCADTestData);
//         })
//         .catch((error) => {
//             console.error('Error fetching all CAD test data:', error);
//         });
// }


// Event listeners for the buttons
// cadButton.addEventListener('click', () => {
//     changeHeaderImage('cad-image.jpg'); 
// });

// heartFailureButton.addEventListener('click', () => {
//     changeHeaderImage('heart-failure-image.jpg'); 
// });