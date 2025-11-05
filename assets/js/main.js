document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      if(siteNav.style.display === 'block') siteNav.style.display = '';
      else siteNav.style.display = 'block';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        var target = document.querySelector(href);
        if(target){
          window.scrollTo({top: target.offsetTop - 60, behavior: 'smooth'});
          // close mobile nav
          if(window.innerWidth <= 720 && siteNav) siteNav.style.display = '';
        }
      }
    });
  });
});
