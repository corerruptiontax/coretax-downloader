chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: myFunction
  });
});

let totalDownload = 0;

chrome.downloads.onChanged.addListener((delta) => {
  if (delta.state && delta.state.current === "complete") {
    totalDownload++;
    console.log(`Total downloads: ${totalDownload}`);
    
    // You can also send a message to the popup or background script if needed
    chrome.runtime.sendMessage({ 
        type: "downloadComplete",
        count: totalDownload
     });
  }
});

function myFunction() {
  alert("Hello from Chrome Extension for coretax download!");
}
