// LOGIN PAGE
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if (user === "admin" && pass === "1234") {
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("error").classList.remove("hidden");
        }
    });
}

// SEARCH FUNCTION (customers + credit history)
function enableSearch(inputId, tableId, dataList, renderFunction) {
    document.getElementById(inputId).addEventListener("input", function () {
        const value = this.value.toLowerCase();
        const filtered = dataList.filter(item =>
            Object.values(item).some(val =>
                String(val).toLowerCase().includes(value)
            )
        );
        renderFunction(filtered);
    });
}
// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}
