
$(document).ready(function(){
  $(function() {
    $('.jcarousel').jcarousel({
      'list': '.jcarousel-list',
      'animation': 'slow',
      'center': true

    });
  });
 

    /* Browser scroll */
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


    /* Nav Scroll */
    $("#nav_product").click(function(){
      $("body").animate({scrollTop:'15px'}, { duration:600 , queue:false });
      return false;
    });
    $("#nav_design").click(function(){
      $("body").animate({scrollTop:'1000px'}, { duration:600 , queue:false });
      return false;
    });
    $("#nav_about").click(function(){
      $("body").animate({scrollTop:'2000px'}, { duration:600 , queue:false });
      return false;
    });

})



    /* Video DEMO */
    function createBG(){
      w = document.getElementById("wrapper");
      bg_div = document.createElement("div");
      bg_div.className = "bg_div_style";
      w.parentNode.insertBefore(bg_div, w);
    }


    function bgMove(){
      client_width = document.body.clientWidth;
      if (!bg_div.style.left){ bg_div.style.left = "0px"; }
      xpos = parseInt(bg_div.style.left);
      dist = Math.ceil((client_width - xpos)/10);
      if (xpos < client_width){ xpos += dist; }
      bg_div.style.left = xpos + "px";
      move = setTimeout("bgMove()", 10);
    }