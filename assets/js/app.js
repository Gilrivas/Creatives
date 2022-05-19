var burger = document.getElementById('burger');
var closeNav = document.getElementById('closeNav');
var mobileNavArea = document.getElementById('mobileNavArea');

burger.addEventListener('click', function(){
    mobileNavArea.classList.remove('none');

    setTimeout(() => {
        mobileNavArea.classList.add('openNav');
    }, 200);
    
    this.classList.add('none');
    closeNav.classList.remove('none');
})

closeNav.addEventListener('click', function(){

    mobileNavArea.classList.remove('openNav');

    setTimeout(() => {
        mobileNavArea.classList.add('none');
    }, 200);
   
    this.classList.add('none');
    burger.classList.remove('none');
    
})