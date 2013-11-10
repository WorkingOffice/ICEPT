function zjc_complete ()
{
  $(function() {
    $('.jcarousel').jcarousel({
      'list': '.jcarousel-list',
      'animation': 'slow',
      'center': true

    });
  });
 
    $(window).scroll(function(){
      topDist = $(this).scrollTop()
      
	  if (topDist <= 5){
        $("#nav li").removeClass("active");
        $("#nav_home").addClass("active");
      }
	  if (topDist <= 1000&&topDist >= 5){
        $("#nav li").removeClass("active");
        $("#nav_product").addClass("active");
      }
      if (topDist >=1000 && topDist <= 2000){
        $("#nav li").removeClass("active");
        $("#nav_design").addClass("active");
      }
      if (topDist >= 2000 && topDist <= 3000){
        $("#nav li").removeClass("active");
        $("#nav_about").addClass("active");
      }
    });
}