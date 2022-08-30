const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActievClass();
        panel.classList.add("active");
    })
}) 

function removeActievClass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}