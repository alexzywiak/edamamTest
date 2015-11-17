$(function(){


	// edamam
	var id = 'd5063256';
	var key = '8afe98dea10de5cb7dc5baebb0431f08';
	var url = 'https://api.edamam.com/search?';

	$.ajax({
		url : url,
		jsonp: "callback",
		dataType: "jsonp",
		data: {
			q: 'chicken',
			app_id : id,
			app_key: key,
			from: 11
		},
		success: function(data){
			console.log(data);
		},
		error: function(err){
			console.log(err);
		}
	});
});