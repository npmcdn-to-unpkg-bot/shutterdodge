var main = function() {
    $('.btn').click(function() {
        $('.navbar-search').animate({
            top: '50px'
        }, 200);

        $('#searchbox').focus()
        $('#searchbox').select()

        $('.bg').animate({
            top: '50px'
        }, 200);
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
        $('.leftbar').animate({
            left: '0px'
        }, 200);

        $('.city').hide({
        }, 200);
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
    document.onkeydown = function(evt) {
    console.log(evt.keyCode);
    }
});
};
$(document).ready(main);
