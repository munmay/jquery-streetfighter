$(document).ready(function() {

$('body').keydown(function(e){
  		if(e.keyCode == 88){
  		   $('.ryu-still').hide();
  		   $('.ryu-ready').hide();
  		   $('.ryu-cool').show();
  	     }
  	})

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  })

  .mouseleave(function(){
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  	$('.ryu-cool').hide();
  })



  .mousedown(function(){
  	playHadouken();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  		{'left': '500px'}, 500,
  		function(){
  			$(this).hide();
  			$(this).css('left','0px');
  		});
  })

  .mouseup(function(){
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  })
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
