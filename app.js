var main = function() {
    $('.btn').click(function() {
        $('.navbar-search').animate({
            top: '50px'
        }, 200);

        $('#searchbox').focus()
        $('#searchbox').select()

        $('.bg').animate({
            top: '50'
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
