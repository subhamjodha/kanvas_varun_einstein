/*=======================ballon changing text =========================================*/
var flag=1;
setInterval(function(){
  if(flag%2==1){
    $(".balloon div:nth-child(1) span").text("A");
    $(".balloon div:nth-child(2) span").text("L");
    $(".balloon div:nth-child(3) span").text("B");
    $(".balloon div:nth-child(4) span").text("E");
    $(".balloon div:nth-child(5) span").text("R");
    $(".balloon div:nth-child(6) span").text("T");
  }
  else{
    $(".balloon div:nth-child(1) span").text("☺");
    $(".balloon div:nth-child(2) span").text("B");
    $(".balloon div:nth-child(3) span").text("D");
    $(".balloon div:nth-child(4) span").text("A");
    $(".balloon div:nth-child(5) span").text("Y");
    $(".balloon div:nth-child(6) span").text("!");
  }
  flag++;
  if(flag==1000)
    flag=1;
},6000);
/*====================================Celebration begins ================================*/
function start_celebrating(){
  document.getElementById("audioTag1").play();
  $("#party_start_button").show();
  make_wish();
  window.setInterval('drawing()',10);
}
var myvar;
function start_party(){
  $("#party").show();
  $("#party_stop_button").show();
  $("#party_start_button").hide();
  $("#party_celebrate_button").hide();
  document.getElementById("audioTag1").pause();
  //document.getElementById("audioTag2").play();
  fiddle_audioTag2();
  myvar=setTimeout(function(){
    stop_party();
  },31000);
}
function stop_party(){
  clearTimeout(myvar);
  $("#party").hide();
  $("#party_stop_button").hide();
  $("#party_start_button").show();
  document.getElementById("audioTag1").pause();
  //document.getElementById("audioTag2").pause();
  fiddle_audioTag2();
}
function fiddle_audioTag2(){
  var audio=document.getElementById("audioTag2");
  if(audio.paused){
    audio.play();
  }
  else{
    audio.pause();
    audio.currentTime =0;
  }
}
