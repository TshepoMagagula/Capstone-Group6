# Capstone Project - Coronary Artery Disease & Heart Failure Prediction

## Project Overview
This project is designed to analyze and predict Coronary Artery Disease (CAD) and Heart Failure (HF) using machine learning models. It features a web-based user interface, a backend API, and database integration for storing and retrieving medical records related to these conditions.

## Directory Structure
```
tshepomagagula-capstone-group6/
├── API.http                # HTTP request samples for API testing
├── app.py                  # Main Python application for ML models
├── db.js                   # Database connection setup
├── modelCAD.pkl            # Pre-trained model for CAD prediction
├── modelHF.pkl             # Pre-trained model for HF prediction
├── package.json            # Node.js project dependencies
├── requirements.txt        # Python dependencies
├── scaler.pkl              # Scaler for feature normalization
├── scalerCAD.pkl           # Scaler specific to CAD model
├── script.js               # Frontend script handling UI logic
├── server.js               # Backend server using Node.js and Express
├── data/                   # Dataset directory
│   ├── Coronary_artery.xlsx    # CAD dataset
│   └── Heart Failure Clinical Records.xlsx # HF dataset
├── migrations/             # Database migration scripts
│   ├── 001-create-database.sql
│   ├── 002-create-CAD-table.sql
│   └── 003-create-HF-table.sql
├── models/                 # Machine Learning models
│   ├── modelCAD.py         # CAD model implementation
│   └── modelHF.py          # HF model implementation
└── public/                 # Frontend UI files
    ├── CAD_Analysis(1).html  # CAD analysis page
    ├── CAD_Analysis.html     # CAD analysis page
    ├── CAD_result.html       # CAD prediction results
    ├── HF_Analysis.html      # HF analysis page
    ├── HF_result.html        # HF prediction results
    ├── alpineSQL.js          # SQL handling for frontend
    ├── home.html             # Homepage
    ├── index.html            # Main entry page
    ├── methods.js            # Utility functions for UI
    ├── register.html         # User registration page
    ├── style(1).css          # Stylesheet
    ├── style.css             # Stylesheet
    └── image/                # Image assets
        ├── D-ribose.PNG
        ├── Diet.PNG
        └── coenzyme.PNG
```

## Features
- **Machine Learning Models**: Predict CAD and HF based on clinical data.
- **Web Interface**: HTML-based UI for user interaction.
- **Database Integration**: SQLite database to store patient records.
- **API Endpoints**: ExpressJS backend API to handle predictions and data management.

## Setup Instructions
### 1. Clone the repository:
```bash
git clone https://github.com/your-repo/tshepomagagula-capstone-group6.git
cd tshepomagagula-capstone-group6
```

### 2. Install Dependencies
#### Python Dependencies:
```bash
pip install -r requirements.txt
```
#### Node.js Dependencies:
```bash
npm install
```

### 3. Run the Server
#### Start Python ML API:
```bash
python app.py
```
#### Start Node.js Backend:
```bash
node server.js
```

### 4. Access the Application
Open `public/index.html` in a browser.

## API Endpoints
| Method | Endpoint           | Description |
|--------|--------------------|-------------|
| GET    | `/predict/cad`     | Predict CAD |
| GET    | `/predict/hf`      | Predict HF  |
| POST   | `/register`        | User registration |

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, Python Flask
- **Database**: SQLite
- **Machine Learning**: Scikit-learn, Pandas, NumPy

## Contributors
- Tshepo Magagula (@Tshepo_Magagula)

## License
This project is licensed under the MIT License.

