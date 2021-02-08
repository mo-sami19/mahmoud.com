

$(document).ready(function() {
     
    $(".fa-search").click(function() {
       $(".search-box").toggle();
       $("input[type='text']").focus();
     }); 

 });
 $(window).scroll( function() {
    if( $(this).scrollTop() > 0 ) {
        $(".logo").hide();
    }
    else {
        $(".logo").show();
    }
});


 $(function () {
  var count = 0;
  $('.owl-carousel').each(function () {
      $(this).attr('id', 'owl-demo' + count);
      $('#owl-demo' + count).owlCarousel({
          navigation: true,
          slideSpeed: 300,
          pagination: true,
          singleItem: true,
          autoPlay: 2000,
          autoHeight: true,
          items:1

      });
      count++;
  });
});

$(".remove-caption").click(function(){

    $(".choose-tittle").remove();

});



