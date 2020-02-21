$(document).ready(function() {
	$(".header").animate({visibility:"hidden"},"slow");
$(".header").animate({visibility:"visible"},"slow");

	count = 0;
	var msg = ["Developer.","IITian.","Revealing this March<br /><br /><a class='#dev' href='https://testing.akshatweb.in'>See the development</a>"];
  var id = setInterval(function() 
	  {
		  if(count < msg.length)
		  {
			   $('.guess').animate({visibility:"hidden"},"slow");

			  $('.guess').animate({visibility:"visible"},"slow");

		  $('.guess').html("<center><h1>"+msg[count]+"</h1></center>");
    
    $('.guess').animate({visibility:"hidden"},"slow");

		  count++;
		  }
		  else
		  {
			  clearInterval(id);
		  }
}, 2000);


});
