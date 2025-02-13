chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: myFunction
    });
  });
  
  function myFunction() {
    alert("Hello from Chrome Extension for coretax download!");
  }
  