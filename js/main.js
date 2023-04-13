$(document).ready(function(){

  $(".cont").hover(function(){
    $(this).css({
      background:"#000"
    })
  },function(){
    // $(this).animate({
    //   width:200
    //   },1000);
  });

  $(".gnb_wrap>div").hover(function(){
    $(this).css({
      color:"#009c9d",
      fontWeight:"500"
    });
  },function(){
    $(this).css({
      color:"#555"
    });
  });

}); /* 제이쿼리 끝 */



