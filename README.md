🏦 Bank-Inspired Portal for Data-Driven Loan Prediction
📌 Project Overview

This project is a bank-inspired, data-driven loan prediction system developed as part of an Industry Internship at JCE Innovation & Entrepreneurship Foundation (JIEF), Belagavi. The system uses Machine Learning to analyze loan applicant details and predict the likelihood of loan approval.

The project demonstrates an end-to-end data science workflow, including data preprocessing, model training, API deployment using FastAPI, and a web-based frontend inspired by real-world banking portals.

🎯 Key Features

Machine Learning–based loan approval prediction

RESTful API built using FastAPI

Bank-inspired web interface (HTML, CSS, JavaScript)

Real-time prediction results

Modular and easy-to-understand project structure

Prototype-level implementation for academic and learning purposes

🛠️ Technologies Used

Programming Language: Python 3.10+

Machine Learning: Scikit-learn

Backend Framework: FastAPI

Frontend: HTML, CSS, JavaScript

Model Used: Random Forest Classifier

Data Handling: Pandas, NumPy

Deployment Server: Uvicorn

Version Control: Git & GitHub

📂 Project Structure
Loan_Prediction/
│
├── app.py                  # FastAPI backend application
├── Notebook.ipynb          # Model training & analysis notebook
├── loan_data.csv           # Dataset used for training
├── model.pkl               # Trained ML model
├── Scaler.pkl              # Feature scaler
│
├── frontend/
│   ├── login.html
│   ├── dashboard.html
│   ├── status.html
│   ├── news.html
│
├── README.md               # Project documentation
└── .gitignore              # Ignored files and folders

⚙️ Prerequisites

Ensure the following are installed on your system:

Python 3.10 or above

pip (Python package manager)

Git (optional, for cloning repository)

📦 Required Python Libraries

Install the required dependencies using:

pip install fastapi uvicorn pandas numpy scikit-learn joblib

▶️ How to Run the Project
Step 1: Clone the Repository
git clone https://github.com/your-username/loan-prediction-portal.git
cd loan-prediction-portal


(Or download the ZIP and extract it)

Step 2: Start the FastAPI Backend

Run the backend server using:

uvicorn app:app --reload


The API will start at:

http://127.0.0.1:8000


Swagger API documentation:

http://127.0.0.1:8000/docs

Step 3: Open the Frontend

Navigate to the frontend folder

Open login.html or dashboard.html in a browser
OR

Access via:

http://127.0.0.1:8000/frontend/status.html

🧠 How the System Works

User enters loan applicant details via the web interface

Data is sent to the FastAPI backend

Backend loads the trained ML model and scaler

Model predicts loan approval likelihood

Result is displayed on the frontend in real time

📊 Machine Learning Details

Model: Random Forest Classifier

Target Variable: Loan Approval Status

Input Features:

Applicant Income

Education

Credit History

Loan Amount

Loan Term

Property Area

Evaluation Metrics: Accuracy and confusion matrix analysis

## 📸 Project Screenshots

### 🔐 Login Page
<img width="1920" height="1080" alt="Screenshot (163)" src="https://github.com/user-attachments/assets/38190b68-d4b2-40cb-9d36-ecadfdf8b960" />


### 📊 Dashboard
<img width="1920" height="1080" alt="Screenshot (164)" src="https://github.com/user-attachments/assets/50aaef17-6239-4e8c-a353-091786ff32bb" />


### ✅ Loan Prediction Result
<img width="1920" height="1080" alt="Screenshot (165)" src="https://github.com/user-attachments/assets/e64d1309-bd82-4434-b227-41b9e2531954" />
<img width="1920" height="1080" alt="Screenshot (166)" src="https://github.com/user-attachments/assets/448f41d9-5f6e-4775-9120-736353dc582e" />

### 👤 Customer Account Status Page
<img width="1920" height="1080" alt="Screenshot (167)" src="https://github.com/user-attachments/assets/5d9f5bc5-5e18-4832-9fe3-a392763390d4" />


### 📢 Bank Announcements Page
<img width="1920" height="1080" alt="Screenshot (168)" src="https://github.com/user-attachments/assets/0fd2d916-faee-45e2-8122-f2026f048934" />

### 📞 Contact / Support Page
<img width="1920" height="1080" alt="Screenshot (169)" src="https://github.com/user-attachments/assets/069d75a2-cd45-4ace-9d53-dacbb46af378" />

⚠️ Disclaimer

This project is developed strictly for academic and demonstration purposes.
The system is bank-inspired and does not represent or connect to any real banking institution. Final loan approval decisions in real-world scenarios depend on official bank policies and verification processes.

🚀 Future Enhancements

Integration with database (MySQL / PostgreSQL)

User authentication with role-based access

Improved UI with frameworks like React

Model performance comparison with other algorithms

Cloud deployment

👩‍🎓 Author

Saloni Chougule
Bachelor of Engineering – Computer Science and Engineering
Jain College of Engineering, Belagavi
Intern – Data Science
JCE Innovation & Entrepreneurship Foundation (JIEF)

📜 License

This project is intended for educational and internship evaluation purposes only.
