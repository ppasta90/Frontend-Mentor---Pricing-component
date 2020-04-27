/* switch annual-monthly */

const toggle = document.querySelector("input");
const annual = document.querySelectorAll(".year")
const monthly = document.querySelectorAll(".month")


const toggleDisplay = value => el => {
    el.style.display = value
}


toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
        annual.forEach(toggleDisplay("none"))
        monthly.forEach(toggleDisplay("block"))
    } else {
        annual.forEach(toggleDisplay("block"))
        monthly.forEach(toggleDisplay("none"))
    }
})