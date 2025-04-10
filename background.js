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

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      console.log('tabs',tabs);
      if(tabs === undefined || tabs.length === 0) { 
        console.warn('No active tab found.');
        return 
      };
      chrome.tabs.sendMessage(tabs[0].id, { 
          type: "downloadComplete",
          count: totalDownload
       });
    });
    
    // You can also send a message to the popup or background script if needed
  }
});

function myFunction() {

  alert("Hello from Chrome Extension for coretax download!");
}
