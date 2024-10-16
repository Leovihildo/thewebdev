// For the navbar

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0){
        body.classList.remove("scroll-up");
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
})

// Educational and work experiences
const sel = document.querySelectorAll('[data-target]'),
    contents = document.querySelectorAll('[data-content]'),
    // underline = document.querySelectorAll('.edu-btn'),
    edu = document.querySelector('.edu'),
    work = document.querySelector('.work');

sel.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        contents.forEach(content =>{
            content.classList.remove('selected');
        })
        target.classList.add('selected');
        tab.forEach(tab =>{
            tab.classList.remove('selected');
        })
        tab.classList.add('selected');
    })
})

// Add and remove colourful underline(border-bottom) to experience tabs
edu.addEventListener('click', ()=>{
    edu.classList.add('highlight');
    work.classList.remove('highlight');
})
work.addEventListener('click', ()=>{
    work.classList.add('highlight');
    edu.classList.remove('highlight');
})