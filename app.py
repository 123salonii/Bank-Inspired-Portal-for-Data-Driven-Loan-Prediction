from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import uvicorn

app = FastAPI(
    title="SBI-Inspired Loan Prediction API",
    description="AI-based loan eligibility prediction system",
    version="1.0"
)

# ---------------- CORS CONFIG ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # OK for local & academic demo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- FRONTEND SERVE ----------------
app.mount("/frontend", StaticFiles(directory="frontend"), name="frontend")

@app.get("/")
def serve_home():
    return FileResponse("frontend/login.html")

# ---------------- INPUT MODEL ----------------
class InputData(BaseModel):
    x1: float  # Applicant Income
    x2: float  # Education
    x3: float  # Loan Amount
    x4: float  # Credit History
    x5: float  # Property Area

# ---------------- LOAD MODEL ----------------
scaler = joblib.load("Scaler.pkl")
model = joblib.load("model.pkl")

# ---------------- HEALTH CHECK (OPTIONAL BUT GOOD) ----------------
@app.get("/health")
def health_check():
    return {"status": "Server is running"}

# ---------------- PREDICTION ROUTE ----------------
@app.post("/predict/")
def predict(data: InputData):

    # Business rule (realistic banking logic)
    if data.x3 > data.x1:
        return {
            "prediction": 0,
            "reason": "Loan rejected because requested loan amount exceeds income."
        }

    # Prepare data for ML model
    values = np.array([[data.x1, data.x2, data.x3, data.x4, data.x5]])
    scaled_values = scaler.transform(values)

    # Model prediction
    prediction = int(model.predict(scaled_values)[0])

    # Response
    if prediction == 1:
        return {
            "prediction": 1,
            "message": "Loan Approved"
        }
    else:
        return {
            "prediction": 0,
            "message": "Loan Rejected"
        }

# ---------------- RUN SERVER ----------------
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
