// Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el2) => observer.observe(el2));
// End Scroll


// Scroll Image
const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
            entry2.target.classList.add("show2");
        } else {
            entry2.target.classList.remove("show2");
        }
    })
})

const hiddenelements2 = document.querySelectorAll(".hidden2");
hiddenelements2.forEach((el2) => observer2.observe(el2));

// End Scroll