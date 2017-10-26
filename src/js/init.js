window.$ = require('jquery');
var Materialize = require('materialize-css');
require('../css/style.css');
require('../css/font-awesome.css');
require('../../node_modules/materialize-css/dist/css/materialize.min.css');
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.slider').slider();
    let $contactForm = $('#contact-form');

    $contactForm.on('submit',(e => {
        $.ajax({
          url: 'https://formspree.io/robertoviquez@gmail.com',
          method: 'POST',
          data: $(this).serialize(),
          datatype: 'json'
        }).done(data => {
      			Materialize.toast('Message sent',4000);
        }).fail(() => {
          Materialize.toast(`Message could not be sent: ${err}`,4000);
        });
        form.reset();
    }));
  }); // end of document ready
})(jQuery); // end of jQuery name space
