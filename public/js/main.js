$(document).ready(function () {



  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $a = $(".navbar-default .nav > li > a")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $a.toggleClass('scrolled', $(this).scrollTop() > $a.height());
    });
  });
  $("nav").find("li").on("click", "a", function () {
    $('.navbar-collapse.in').collapse('hide');
  });

  //deep sea
  $('#img1_btn').on('click', function(){
    $('#portfolio_img1').attr('src', 'images/portfolio/thumbnails/DSTH.png'); 
  });
  $('#img2_btn').on('click', function(){
    $('#portfolio_img1').attr('src', 'images/portfolio/thumbnails/DSTH3.png'); 
  });
  $('#img3_btn').on('click', function(){
    $('#portfolio_img1').attr('src', 'images/portfolio/thumbnails/DSTH2.png'); 
  });

  //wanderlyst
   $('#wl_img1_btn').on('click', function(){
    $('#portfolio_img2').attr('src', 'images/portfolio/thumbnails/wlyst.png'); 
  });
  $('#wl_img3_btn').on('click', function(){
    $('#portfolio_img2').attr('src', 'images/portfolio/thumbnails/wlyst_3.png'); 
  });
   $('#wl_img4_btn').on('click', function(){
    $('#portfolio_img2').attr('src', 'images/portfolio/thumbnails/wlyst_4.png'); 
  });
  $('#wl_img5_btn').on('click', function(){
    $('#portfolio_img2').attr('src', 'images/portfolio/thumbnails/wlyst_5.png'); 
  });
  $('#wl_img6_btn').on('click', function(){
    $('#portfolio_img2').attr('src', 'images/portfolio/thumbnails/wlyst_6.png'); 
  });
    $('#wl_img7_btn').on('click', function(){
    $('#portfolio_img2').attr('src', 'images/portfolio/thumbnails/wlyst_7.png'); 
  });

  //nologo
     $('#nl_img1_btn').on('click', function(){
    $('#portfolio_img3').attr('src', 'images/portfolio/thumbnails/nologo.png'); 
  });
  $('#nl_img2_btn').on('click', function(){
    $('#portfolio_img3').attr('src', 'images/portfolio/thumbnails/nologo_2.png'); 
  });
   $('#nl_img3_btn').on('click', function(){
    $('#portfolio_img3').attr('src', 'images/portfolio/thumbnails/nologo_3.png'); 
  });
  $('#nl_img4_btn').on('click', function(){
    $('#portfolio_img3').attr('src', 'images/portfolio/thumbnails/nologo_4.png'); 
  });
  $('#nl_img5_btn').on('click', function(){
    $('#portfolio_img3').attr('src', 'images/portfolio/thumbnails/nologo_5.png'); 
  });

   
});

 $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-50
    }, 500);

 
});

