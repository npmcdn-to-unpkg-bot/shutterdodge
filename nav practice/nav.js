var main = function() {
    $('.btn').click(function() {
        $('.navbar-search').animate({
            top: '0px'
        }, 200);

        $('#searchbox').focus()
        $('#searchbox').select()
    });

    $('.go').click(function() {
        $('.navbar-search').animate({
          top: "-50px"
        }, 200);

        $('.bg').animate({
          top: "0px"
        }, 200);
    });

    $('.citybtn').click(function() {
        $('#leftbar').animate({
            left: '0px'
        }, 600);
        $('#map').animate({
            left: '0px'
        }, 600);
        $('.buttons button').animate({
            left: '15px'
        }, 600);

        $('.city').hide({
        }, 600);
    });

    $(".locbtn").click(function(){

        $(".city").toggle();
    });
    $(".weabtn").click(function(){
        $('.temp').animate({
          top: '10px'
        }, 200);
        $(".temp").toggle();
    });
    $(".galbtn").click(function(){
        $(".gallerybar").toggle();
        $(".morbtn").toggle();
        $('.gallerybar').animate({
            left: '25px'
        }, 800);
        $('.morbtn').animate({
            left: '152px'
        }, 700);

    });

    $(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.navbar-search').animate({
        top: "-50px"
      }, 200);

      $('.bg').animate({
        top: "0px"
      }, 200);
    }
});
};
$(document).ready(main);
