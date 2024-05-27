console.log("foreground.js loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.command = "notetube:generate") {
		window.location.href = `http://127.0.0.1:3000/generate?v=${window.location.href}`;
		sendResponse(true)
	}
});