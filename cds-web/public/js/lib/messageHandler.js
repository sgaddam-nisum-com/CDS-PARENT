define(["jquery"], function($){

	function renderMessage(msg, container, className, time){
		var statusNode = $("<div class='"+className+" status-wrapper' style='display:none'>"),
			stausWrapper = $(container),
			time = time || 500;

		if(!stausWrapper.length){
			console.error("No status wrapper field is specified.");
			return;
		}
		statusNode.html(msg);
		stausWrapper.empty().append(statusNode);
		statusNode.fadeIn(500);
	}

	function showErrorStatus(msg, container, time){
			renderMessage(msg, container, "error-status-node",time);
	}

	function showInfoStatus(msg, container, time){
			renderMessage(msg, container, "info-status-node", time);
	}

	function clearMessageStatus(time){
			var time = time|| 500;
			$(".status-wrapper").fadeOut(500);
			$(".status-wrapper").remove();
	}


	return {
		showInfoStatus : showInfoStatus,
		showErrorStatus : showErrorStatus,
		clearMessageStatus : clearMessageStatus
	}

});