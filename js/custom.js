$(document).ready(function(e) {

     myVar = setInterval(toggle, 3000);

     $('.body-background').particleground({
    	dotColor: '#dadada',
    	lineColor: '#dadada'
  	 });

});


function toggle()
{
	var count = $( ".animate-auto" ).size();
	var index = Math.floor((Math.random() * count) + 0);

	$( ".animate-auto" ).eq(index).toggleClass("animate-active");
	console.log(count);
}