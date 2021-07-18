$(document).ready(function(){
    $('.scroll_img').slick({
      slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  prevArrow:'<button type="button" class="slick-prev"><img src="assets/icons/left.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="assets/icons/right (1).svg"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: false,
        arrows: false
    }
    }
  ]
    });


    
    $('.center_container').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });


    $('input[name=phone]').mask("+7 (999) 999-99-99");
    

    $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "assets/mailer/smart.php",
        data: $(this).serialize() 
     }).done(function(){
       $(this).find("input").val("");
      
       $('form').trigger('reset');
     })
     return false;
    })
  });

  ///modal
var modal = document.getElementById('myModal');

var modalTo = document.getElementById('toModalTo');

var btn = document.getElementById("myBtn");

var btn1 = document.getElementById("toBtn");

var btn2 = document.getElementById("btn2")

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal.style.display = "none";
  modalTo.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == Tomodal) {
    modalTo.style.display = "none";
  }
}

span.onclick = function() {
  modalTo.style.display = "none";
}