window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
            
        });
    };

});

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


var $contentdb = $('.menu-content-db');

function showContentdb(type) {
    $contentdb.filter(':visible').fadeOut(0, function() 
  {
  $contentdb.filter('.' + type).fadeIn(600);
  });
  $contentdb.hide().filter('.' + type).show();
}

$('.menu-db').on('click', '.menu-btn-db', function(e) {
  showContentdb(e.currentTarget.hash.slice(1));
  e.preventDefault();
  
}); 

// show 'about' content only on page load (if you want)
showContentdb('ph');




// Add active class to the current button (highlight it)
var header = document.getElementById("kp-nav");
var btns = header.getElementsByClassName("kp-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actv");
  current[0].className = current[0].className.replace(" actv", "");
  this.className += " actv";
  });
}












