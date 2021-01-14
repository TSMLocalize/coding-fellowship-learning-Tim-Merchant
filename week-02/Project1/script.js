let burgerBtn = document.getElementById('burgerBtn');
let burgerList = document.getElementById('burgerList');

burgerBtn.addEventListener('click', function(){
    
    if (burgerList.classList.contains('active')) {
        
        burgerList.classList.value = "burgerList animateBurgerDown";                        
    } else {
        burgerList.classList.value = "burgerList active animateBurgerUp";                            
    }

});

if (window.screen.width > 780) {
    burgerList.classList.value = "";                        
}