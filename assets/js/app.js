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



function detectSytem(){

  var OS="Unknown";
  
  if (navigator.userAgent.indexOf("Win")!=-1){
    OS="Windows";
    document.getElementById('titleHeader').classList.add('titleEfect');
  } 
  
  if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
  
  if (navigator.userAgent.indexOf("X11")!=-1) OS="UNIX";
  
  if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";
  
  if (navigator.userAgent.indexOf("iPhone")!=-1) OS="Iphone";
  
  if (navigator.userAgent.indexOf("iPad")!=-1) OS="Ipad";
  
  if (navigator.userAgent.indexOf("Android")!=-1) OS="Android";
  
  
  
  return OS;
  
  }

  console.log( detectSytem());
