const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
            entry.target.classList.toggle('show', entry.isIntersecting)
    })
})

const hiddenElementsFADE = document.querySelectorAll('.hidden-fade')
hiddenElementsFADE.forEach((el) => observer.observe(el))