/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */
//alert("yo")
$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('nav').addClass('fixed-header');
    $('nav div').addClass('visible-title');
  }
  else {
    $('nav').removeClass('fixed-header');
    $('nav div').removeClass('visible-title');
  }
});
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}