console.log("popup.js loaded");

function getActiveTab() {
	return chrome.tabs.query({active: true, currentWindow: true});
}

getActiveTab().then((tabs) => {
	chrome.tabs.sendMessage(tabs[0].id, {
		command: "notetube:startup",
	}).then((response) => {
		if (response == true) {
			document.getElementById("button").addEventListener("click", fire);
		} else {
			document.getElementById("message").innerHTML = "NoteTube only works on YouTube videos"
		}
	}).catch((error) => {
		document.getElementById("message").innerHTML = "NoteTube only works on YouTube videos"
	});
});

function fire() {
	getActiveTab().then((tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, {
			command: "notetube:generate",
		}).then((response) => {
			if (response == true) {
				document.getElementById("message").innerHTML = "NoteTube is now generating your notes"
			}
		});
	});
}
