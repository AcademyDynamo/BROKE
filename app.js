function togglePlayer(button) {
    if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.classList.add("inactive");
        button.textContent = "-";
    } else {
        button.classList.remove("inactive");
        button.classList.add("active");
        button.textContent = "+";
    }
}
