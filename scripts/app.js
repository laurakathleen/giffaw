
$(document).on("ready", function(){
	displayImages(event);

//when the form is submitted, prevent the default of 'getting' because we don't want to double 'get' the info
//run a function displayImages that will retrieve the searched images
	$("form").on("submit", function(event){
		event.preventDefault();
		displayImages();
	})
	
//ajax: get the searched info from the api, have two followup function options: 1 for success,1 for fail	
	function displayImages(){
		$.ajax({
    		method: "GET",
    		url: "http://api.giphy.com/v1/gifs/search?",
    		data: $("form").serialize(),
      		success: onSuccess,
    		error: onError
		});
	}

//if the ajax function is successful, display 25 images at a time
	function onSuccess(json) {
		for (var i=0; i<=json.data.length; i++){
		 $(".gif-gallery").append($("<img src='json.data[i].images.fixed_width.url'>"));
		 $("img").append($("<input type='submit' value='See More!' class='see-more-btn'>"));
		}
	}

	$(".see-more-btn").on("submit", function(event){
		event.preventDefault();
		displayImages();
	})

	function onError(xhr, status, errorThrown) {
    	alert("Sorry, there was a problem!");
    	console.log("Error: " + errorThrown);
    	console.log("Status: " + status);
    	console.dir(xhr);
	}
});


