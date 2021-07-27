var yourScore=0;
$(".ronaldo").click(function(){
  yourScore+=1;
})
$(".insta").click(function(){
  yourScore+=1;
})
$(".non-veg").click(function(){
  yourScore+=1;
})
$(".cycle").click(function(){
  yourScore+=1;
})
$(".bungee").click(function(){
  yourScore+=1;
})
$(".mountain").click(function(){
  yourScore+=1;
})
$(".home").click(function(){
  yourScore+=1;
})
$(".iron").click(function(){
  yourScore+=1;
})
$(".sj").click(function(){
  yourScore+=1;
})
$(".darj").click(function(){
  jsarray = [yourScore,$("input").val()];
sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
})
$(".gangtok").click(function(){
  yourScore+=1;
  jsarray = [yourScore,$("input").val()];
sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
})
