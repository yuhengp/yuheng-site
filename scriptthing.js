//at script, add
$(document).ready( function() {
	$("#arnold-title").click(function () {
		$("#arnold-title").load("http://wd.comsci.club/api/kv.php?key=arnolds-secret");
	});
	
	$.get("http://wd.comsci.club/api/kv.php?key=mycommentbox", function(data {
		$("#comment-box").html(data);
		});

		$("submit-comment").click(function () {
			var currentComments = $("#comment-box").html();
			var newComment = $("comment-input").val();
			var allTheComments = currentComments +"<br>"+ newComment;
			$.post("http://wd.comsci.club/api/kv.php?key=mycommentbox")

		});

$("#comment-box").html( allTheComments );
$("#comment-input")

	// in console, add
	$post.("http://wd.comsci.club/api/kv.php?key=mycommentbox",value)

	//in html code part, add
	<div id="comment-box">
	</div>
	add a comment: <input type="text" id="comment-input">
	<button id="submit-comment">SUBMIT!</button>