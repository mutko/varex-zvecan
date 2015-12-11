$(function() {

    // Use smooth scrooling when clicking on navigation (from https://css-tricks.com/snippets/jquery/smooth-scrolling/)
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    
  // blueimp-gallery za kapije
  document.getElementById('kapije').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          kapije = this.getElementsByTagName('a');
      blueimp.Gallery(kapije, options);
  };

  // blueimp-gallery za ograde
  document.getElementById('ograde').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          ograde = this.getElementsByTagName('a');
      blueimp.Gallery(ograde, options);
  };
  
  // blueimp-gallery za namestaj
  document.getElementById('namestaj').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          namestaj = this.getElementsByTagName('a');
      blueimp.Gallery(namestaj, options);
  };

  // blueimp-gallery za stepenista
  document.getElementById('stepenista').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          stepenista = this.getElementsByTagName('a');
      blueimp.Gallery(stepenista, options);
  };
  
  // blueimp-gallery za felna 1
  document.getElementById('felna_1').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          felna_1 = this.getElementsByTagName('a');
      blueimp.Gallery(felna_1, options);
  };
  
  // blueimp-gallery za felna 2
  document.getElementById('felna_2').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          felna_2 = this.getElementsByTagName('a');
      blueimp.Gallery(felna_2, options);
  };
  
  // blueimp-gallery za felna 3
  document.getElementById('felna_3').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          felna_3 = this.getElementsByTagName('a');
      blueimp.Gallery(felna_3, options);
  };
  
  // blueimp-gallery za felna 4
  document.getElementById('felna_4').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          felna_4 = this.getElementsByTagName('a');
      blueimp.Gallery(felna_4, options);
  };
  
  // blueimp-gallery za felna 5
  document.getElementById('felna_5').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          felna_5 = this.getElementsByTagName('a');
      blueimp.Gallery(felna_5, options);
  };

  // blueimp-gallery za rolbar
  document.getElementById('rolbar').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          rolbar = this.getElementsByTagName('a');
      blueimp.Gallery(rolbar, options);
  };

  // blueimp-gallery za radionica
  document.getElementById('radionica').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          radionica = this.getElementsByTagName('a');
      blueimp.Gallery(radionica, options);
  };

  var video = document.getElementById('video');
    video.addEventListener('click',function(){
      video.play();
  },false);
  
});