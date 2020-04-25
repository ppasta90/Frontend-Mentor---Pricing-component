/* changing class on hover */

const card = document.querySelectorAll('.card');
card.forEach((card) => {
    card.addEventListener('mouseover', (event) => {
        card.classList.add("card-over")
        card.addEventListener('mouseout', (e) => {
            card.classList.remove("card-over");
        });
    });
});

/* switch annual-monthly */

const toggle = document.querySelector("input");
const annual = document.querySelectorAll(".year")
const monthly = document.querySelectorAll(".month")

toggle.addEventListener("change", (e) => {
    if (toggle.checked) {
        annual.forEach((a) => {
            a.style.display = "none"
        })
        monthly.forEach((m) => {

            m.style.display = "block";
        })
    } else {
        annual.forEach((a) => {
            a.style.display = ""
        })
        monthly.forEach((m) => {

            m.style.display = "none";
        })
    }
})