/* ==========================
   THEME TOGGLE
========================== */

const themeBtn =
document.getElementById("themeBtn");

/* Load Saved Theme */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

/* Toggle Theme */

themeBtn.addEventListener(
    "click",
    toggleTheme
);

function toggleTheme(){

    document.body.classList.toggle(
        "dark"
    );

    const isDark =
    document.body.classList.contains(
        "dark"
    );

    if(isDark){

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeBtn.textContent = "☀️";

    }
    else{

        localStorage.setItem(
            "theme",
            "light"
        );

        themeBtn.textContent = "🌙";

    }

}