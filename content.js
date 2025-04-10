chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if(msg.type === "downloadComplete") {
        console.log("Progress updated!");
        const downloaded = msg.count;
        const progress = Math.floor((downloaded / total) * 100);
        console.log(`Progress: ${progress}%`);
    }
});