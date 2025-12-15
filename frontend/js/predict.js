const resultBox = document.getElementById("resultBox");
const predictForm = document.getElementById("predictForm");

predictForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    resultBox.className = "hidden p-4 rounded-lg text-center font-semibold";
    resultBox.textContent = "";

    const payload = {
        x1: parseFloat(document.getElementById("x1").value),
        x2: parseFloat(document.getElementById("x2").value),
        x3: parseFloat(document.getElementById("x3").value),
        x4: parseFloat(document.getElementById("x4").value),
        x5: parseFloat(document.getElementById("x5").value)
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/predict/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        resultBox.classList.remove("hidden");

        if (data.prediction === 1) {
            resultBox.classList.add("bg-green-100", "text-green-800");
            resultBox.textContent = "✔ Loan Approved!";
        } else {
            resultBox.classList.add("bg-red-100", "text-red-800");
            resultBox.textContent = "✘ Loan Rejected!";
        }

    } catch (err) {
        console.error(err);
        resultBox.classList.remove("hidden");
        resultBox.classList.add("bg-red-200", "text-red-900");
        resultBox.textContent = "Backend Connection Error!";
    }
});
