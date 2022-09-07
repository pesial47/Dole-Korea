// visual
var swiper = new Swiper(".banner_area", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

  }); 
  
$(".menu_area").click(function(){
  $(".gnb").stop().animate({left:0},500);
  $(".overlay").stop().fadeIn();
  $("body").css({overflow:"hidden"});
});
$(".btn_nav_close").click(function(){
  $(".gnb").stop().animate({left:"-100%"},500);
  $(".overlay").stop().fadeOut();
  $("body").css({overflow:"auto"});
  return false;
});

$(".nav_tit").click(function(){
  if($(this).hasClass("on")==false){
      $(".nav_tit").removeClass("on");
      $(".nav_tit").next().stop().slideUp(400);
      $(this).addClass("on");
      $(this).next().stop().slideDown(400);

  }else{
      $(".nav_tit").removeClass("on");
      $(this).next().stop().slideUp(400);
  }
});

$(window).scroll(function(){
  var Top=$(document).scrollTop();
  if(Top>=1000){
      $(".btn_top").fadeIn();
  }else{
      $(".btn_top").fadeOut();
  }
  
  $(".btn_top").click(function(){
      $("html,body").stop().animate({scrollTop:0},500);
  });
});

//footer
$(".fm_site_btn").click(function(){
  $(".fm_site_btn").next().stop().slideToggle(400);
  $(this).toggleClass("on");
});



//farm
$(window).scroll(function(){
    var scr=$(document).scrollTop();
    if(scr>=600){
        $(".info .txt_pinefarm").addClass("ani_slideRight");
    }
});

//product
$(".sel_fresh").addClass("on");
$(".sel_packaged").addClass("on");

$(".filter_area").click(function(){
    $(".filter_list").stop().slideToggle(200);
    return false;
});

$(".f_all").click(function(){
    $(".filter_pro").hide();
    $(".area_1").show();
    $(".view_more .btn_more").css({display:"inline-block"});
    $(".filter_area p").text("*전체 상품");
    $(".f_all").css({display:"none"});
});

$(".f_banana").click(function(){
    $(".filter_pro").hide();
    $(".filter_banana").show();
    $(".view_more .btn_more").css({display:"none"});
    $(".filter_area p").text("바나나");
    $(".f_all").css({display:"block"});
});

$(".f_pine").click(function(){
    $(".filter_pro").hide();
    $(".filter_pine").show();
    $(".view_more .btn_more").css({display:"none"});
    $(".filter_area p").text("파인애플");
    $(".f_all").css({display:"block"});
});

$(".f_etc").click(function(){
    $(".filter_pro").hide();
    $(".filter_etc").show();
    $(".view_more .btn_more").css({display:"none"});
    $(".filter_area p").text("기타");
    $(".f_all").css({display:"block"});
});

$(".view_more .btn_more").click(function(){
    $(".area_2").stop().slideDown(500);
    $(".view_more .btn_more").css({display:"none"});
    return false;
});

// sign-in
$(".id_area .btn_checkId").click(function(){
    $(".back_bg").show();
    $(".popup_check").show();
    $("body").css({overflow:"hidden"});
});
$(".popup_check .btn_id_ok").click(function(){
    $(".back_bg").hide();
    $(".popup_check").hide();
    $("body").css({overflow:"auto"});
});

// join
$("#all_check").click(function(){
  if($("#all_check").prop("checked")){
      $('input[type=checkbox]').prop("checked",true);
      $(".btn_agree").addClass("on");
  }else{
      $('input[type=checkbox]').prop("checked",false);
      $(".btn_agree").removeClass("on");
  }
});


//fqa
$(".ques").click(function () {
    $(".ans").stop().slideUp();
    $(this).next().stop().slideDown();
    $(".ques").removeClass("on");
    $(this).addClass("on");
});


//main_contents
  var swiper = new Swiper(".re_silde", {
    slidesPerView: 1.6,
    spaceBetween: 0,
    loop: false,
  });
  var swiper = new Swiper(".event_silde", {
    slidesPerView: 1.3,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,//2.5s
      disableOnInteraction: false,
    },
    loop: false,
  });

  //recipe
$(".recipe_more").click(function(){
  $(".area_2").stop().slideDown();
  $(".recipe_more").css({display:"none"});
    return false;
});

  //sub_recipe
var swiper = new Swiper(".slider_btn", {
  slidesPerView: "auto",
  spaceBetween: 6,
 
});

//sub_recipe_상세페이지 추가
var swiper = new Swiper(".other_wrap4", {
  slidesPerView: 2.2,
  spaceBetween: 6,
  });



//review
var sel1 = $(".review_wrap").find(".review").offset().top;
$(window).scroll(function () {
    var sct = $(document).scrollTop();
    if (sct >= sel1 - 100) {
        $(".review").addClass("ani_slideUp");
    }
});


//border값 수정
  $(".fillter_btn").click(function(){
    $(".fillter_btn").removeClass({"background-color":"#eaeaea","border-radius": "40px"});
    $(this).stop().css({"background-color":"#ffea7c","border-radius": "40px"})
});


