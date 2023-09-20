
const patientResult = 1;

// Update the patient's result in one of the boxes (0 to 4)
document.getElementById(`result-${patientResult}`).textContent = "Patient's Name";

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

// Event listeners for the buttons
cadButton.addEventListener('click', () => {
    changeHeaderImage('cad-image.jpg'); // Replace with your CAD image path
});

heartFailureButton.addEventListener('click', () => {
    changeHeaderImage('heart-failure-image.jpg'); // Replace with your Heart Failure image path
});
