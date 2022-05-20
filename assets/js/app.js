var burger = document.getElementById('burger');
var closeNav = document.getElementById('closeNav');
var mobileNavArea = document.getElementById('mobileNavArea');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("navigation").style.cssText = 
    "background: #191919e0; back-drop-filter: blur(7px);";
  } else {
    document.getElementById("navigation").style.background = "none";
  }
}

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


function openModal(element){
  let modal= document.querySelector('#modal01');
  modal.classList.add("showModal");
  document.getElementById("img01").src = element.src;
  
}

function closeM(){

    let m= document.querySelector('#modal01');
  m.classList.remove("showModal");
  
}
