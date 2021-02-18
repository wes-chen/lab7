'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(likeClicked);
}

function likeClicked(e) {
	console.log("Like clicked!");
	ga("send", "event", 'like', 'click');
}
