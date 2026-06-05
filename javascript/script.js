const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const url = btn.dataset.url;
        window.location.href = url;
    });
});