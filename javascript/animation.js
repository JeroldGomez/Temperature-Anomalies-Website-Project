const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
            entry.target.classList.toggle('show', entry.isIntersecting)
    })
})

const hiddenElementsFADE = document.querySelectorAll('.hidden-fade')
const hiddenElementsLEFT = document.querySelectorAll('.hidden-left')

hiddenElementsFADE.forEach((el) => observer.observe(el))
hiddenElementsLEFT.forEach((el) => observer.observe(el))