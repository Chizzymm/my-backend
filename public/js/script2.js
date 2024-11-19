const navLink = document.getElementById('slide__menu')


const showMenuBtn = document.querySelector('.button-show-menu')
const closeMenuBtn = document.querySelector('.button-close-menu')




showMenuBtn.addEventListener('click', function() {

    navLink.style.right = '0'
    
})


 


closeMenuBtn.addEventListener('click', function() {

    navLink.style.right = '-350px' 


    
})





//WINDOW SCROLL FUNCTIONS


let navBar =  document.querySelector('.navbar')

window.addEventListener('scroll', ()=>{
    


    if (document.body.scrollTop > 40 ) {

        navBar.classList.add('new-nav')
            
    }else{


        navBar.classList.remove('new-nav')
    }
})



