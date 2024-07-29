document.addEventListener("DOMContentLoaded", () => {
    const hueInput = document.getElementById("hue");
    const resetButton = document.getElementById("reset");
    const colorOverlay = document.getElementById("color-overlay");

    hueInput.addEventListener("input", () => {
        const hueValue = hueInput.value;
        colorOverlay.style.backgroundColor = `hsl(${hueValue}, 100%, 50%)`;
        colorOverlay.style.display = "block";
        hueInput.style.setProperty(
            "--thumb-color",
            `hsl(${hueValue}, 100%, 50%)`
        );
    });

    resetButton.addEventListener("click", () => {
        colorOverlay.style.backgroundColor = "hsl(0, 100%, 50%)";
        colorOverlay.style.display = "none";
        hueInput.value = 0;
        hueInput.style.setProperty("--thumb-color", `hsl(0, 100%, 50%)`);
    });

    hueInput.style.setProperty("--thumb-color", `hsl(0, 100%, 50%)`);
    colorOverlay.style.display = "none";
});
