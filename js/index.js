$(document).ready(function(){


  //header_________________________________
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });




  $("header label").click(function(){
    $("aside").stop().fadeToggle(200);

  });



  //sub-visual_____________________________

  $("#sub-visual h1").hover(function(){
    $("#sub-visual .text").css({"opacity":"1","transition":"0.5s"});
    $("#sub-visual h1").css({"opacity":"0","transition":"0.5s"});
    $(".illust4").css({"top":"30%"});
    $(".illust5").css({"top":"15%"});
    $(".illust6").css({"top":"-5%"});
  },function(){
    $("#sub-visual .text").css({"opacity":"0","transition":"0.5s"});
    $("#sub-visual h1").css({"opacity":"1","transition":"0.5s"});
    $(".illust4").css({"top":"40%"});
    $(".illust5").css({"top":"30%"});
    $(".illust6").css({"top":"20%"});
  });
  });



  //menu___________________________________


let bnum = 0;

  $(".tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let inum = $(this).index();

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $(`#${result}`).addClass("active");

  });


  

    //다음보기
    $(".background .fa-chevron-right").click(function(){  
      
      if(bnum<2){
        $(".tabContents div ul").stop(true,true).animate({marginLeft:"-=1200px"},500);
        $(".background .fa-chevron-left").css({"display":"block"});
        bnum++;
      

        if(bnum==2){
          $(".background .fa-chevron-right").css({"display":"none"});
        }

      }

    });
  
  
    //이전보기
    $(".background .fa-chevron-left").click(function(){
  
      if(bnum>0){
      $(".tabContents div ul").stop(true,true).animate({marginLeft:"+=1200px"},500);
      $(".background .fa-chevron-right").css({"display":"block"});
      bnum--;
      

        if(bnum==0){
          $(".background .fa-chevron-left").css({"display":"none"});
        }

      }

    });


  //banner________________________________

  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let oldidx=0;
  let idx=0; 
  let img_n = $img.length;

  function changeImg(idx){ 

    if(oldidx != idx){ 

      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300"); 
      $img.eq(idx).stop().fadeIn("300"); 

    }
    oldidx = idx;  

  };


  function changeAuto(){

    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }

    changeImg(idx)

  };

  timer = setInterval(changeAuto,4000);


  $btn.click(function(){

    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);

    timer = setInterval(changeAuto,4000);

  });



//application___________________________________

$("#application a").hover(function(){
    $("#application .paper").css({"transform":"rotate(-5deg) scale(0.9)","left":"-10px","transition":"0.2s"});
    $("#application .left").css({"transform":"rotate(-5deg)","left":"-10px","transition":"0.2s"});
  },function(){
    $("#application .paper").css({"transform":"rotate(0deg) scale(0.9)","left":"0px","transition":"0.2s"},);
    $("#application .left").css({"transform":"rotate(0deg)","left":"0px","transition":"0.2s"},);
  
});




