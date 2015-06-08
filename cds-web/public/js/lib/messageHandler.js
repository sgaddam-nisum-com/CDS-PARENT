define(["jquery"], function($){


	

	function showInfoStatus(msg, container){

		var statusContainer = $("<div class='status-container'>"),
		statusNode = $("<div class='status-node'>");

		var stausWrapper = $(container);
		if(!stausWrapper.length){
			console.error("No status wrapper field is specified.");
			return;
		}

		statusNode.html(msg);
		statusContainer.empty().append(statusNode);

		stausWrapper.empty().append(statusContainer).slideDown(400);

	}


	return {
		showInfoStatus : showInfoStatus,
	}

});