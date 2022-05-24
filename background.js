let color = "#3aa757";

lchrom.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log("Default background color set to %cgreen","color: ${color}");
});