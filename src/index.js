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


var $content = $('.menu-content');

function showContent(type) {
  $content.hide().filter('.' + type).show();
  $content.filter(':visible').fadeOut(0, function() 
  {
  $content.filter('.' + type).fadeIn(600);
  });
}

$('.menu').on('click', '.menu-btn', function(e) {
  showContent(e.currentTarget.hash.slice(1));
  e.preventDefault();
}); 

// show 'about' content only on page load (if you want)
showContent('pengurus');


var $contentdb = $('.menu-content-db');

function showContentdb(type) {
  $contentdb.hide().filter('.' + type).show();
}

$('.menu-db').on('click', '.menu-btn-db', function(e) {
  showContentdb(e.currentTarget.hash.slice(1));
  e.preventDefault();
  
}); 

// show 'about' content only on page load (if you want)
showContentdb('about');


var $contentks = $('.menu-content-ks');

function showContentks(type) {
  $contentks.hide().filter('.' + type).show();
  $contentks.filter(':visible').fadeOut(0, function() 
  {
  $contentks.filter('.' + type).fadeIn(600);
  });
}

$('.menu-ks').on('click', '.menu-btn-ks', function(e) {
  showContentks(e.currentTarget.hash.slice(1));
  e.preventDefault();
  
}); 

// show 'about' content only on page load (if you want)
showContentks('ksp');

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

// Add active class to the current button (highlight it)
var header = document.getElementById("kgt-nav");
var btns = header.getElementsByClassName("agt-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("stay");
  current[0].className = current[0].className.replace(" stay", "");
  this.className += " stay";
  });
}

// Add active class to the current button (highlight it)
var header = document.getElementById("ks-nav");
var btns = header.getElementsByClassName("ks-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actv");
  current[0].className = current[0].className.replace(" actv", "");
  this.className += " actv";
  });
}












