const navBtn = document.querySelector('.logo-menu')
;

const listNav = document.querySelector('.liste-nav');



navBtn.addEventListener('click', () => {

    listNav.classList.toggle('active');   
})


const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {

   item.addEventListener('click', () => {
       listNav.classList.toggle('active')
   })
})