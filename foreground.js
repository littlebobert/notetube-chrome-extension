console.log("foreground.js loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.command = "notetube:generate") {
		window.location.href = `https://www.notetube.xyz/generate?v=${window.location.href}`;
		sendResponse(true)
	}
});