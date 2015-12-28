$(function() {

      // google map init javascript      
      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(42.9057304, 20.8373518);
        var mapOptions = {
          scrollwheel: false,
          center: myLatlng,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            stylers: [{
              saturation: -100
            }] // grayscale map
          }]
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          title: 'VAREX Zvečan',
        });
      };
      google.maps.event.addDomListener(window, 'load', initialize);

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

    // activate accordion on small size (hides tabs)
    $('.myTab').tabCollapse();

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

  
  // bootstrap validator
  $(document).ready(function() {
    $('#defaultForm').bootstrapValidator({
    // live: 'disabled',
    message: 'This value is not valid',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      fullname: {
        validators: {
          notEmpty: {
            message: 'Ime je obavezno'
          },
          stringLength: {
            min: 3,
            max: 30,
            message: 'Ime ne sme biti kraće od 3 niti veće od 30 karaktera'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: 'Ime može sadržati samo slova'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Email je obavezan'
          },
          emailAddress: {
            message: 'Nevažeća email adresa'
          }
        }
      },
      comment: {
        validators: {
          stringLength: {
            min: 10,
            message:'Molimo unesite najmanje 10 karaktera'
          },
          notEmpty: {
            message: 'Poruka je obavezna'
          }
        }
      }
    }
  });

    // Validate the form manually
    $('#validateBtn').click(function() {
      $('#defaultForm').bootstrapValidator('validate');
    });

  });

});