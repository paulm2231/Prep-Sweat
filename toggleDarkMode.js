function toggleDarkMode() {
    const toggle = document.getElementById("toggle");
    const body = document.getElementsByTagName("body")[0];
    
    if (toggle.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }
  function toggleDarkMode() {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
  }
    