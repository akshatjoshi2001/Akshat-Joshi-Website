$(document).ready(function() {
	$(".header").animate({visibility:"hidden"},"slow");
$(".header").animate({visibility:"visible"},"slow");

	count = 0;
	var msg = ["Developer.","Percussionist.","IITian.","Revealing this December."];
  var id = setInterval(function() 
	  {
		  if(count < msg.length)
		  {
			   $('.guess').animate({visibility:"hidden"},"slow");

			  $('.guess').animate({visibility:"visible"},"slow");

		  $('.guess').html("<h1>"+msg[count]+"</h1>");
    
    $('.guess').animate({visibility:"hidden"},"slow");

		  count++;
		  }
		  else
		  {
			  clearInterval(id);
		  }
}, 2000);


});
