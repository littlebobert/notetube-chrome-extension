console.log("popup.js loaded");

function getActiveTab() {
	return chrome.tabs.query({active: true, currentWindow: true});
}

getActiveTab().then((tabs) => {
	chrome.tabs.sendMessage(tabs[0].id, {
		command: "notetube:generate",
	}).then((response) => {
		if (response == true) {
			document.getElementById("message").innerHTML = "Thanks for using NoteTube!"
		}
	});
});
