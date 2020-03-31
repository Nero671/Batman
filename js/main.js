$(document).ready(function () {
  let navLink  = $('.nav-link');
  
  navLink.on('click', function (event) { 
    event.preventDefault();

    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.active').toggleClass('active');
    $(this).toggleClass('active');
  })
});