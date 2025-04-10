document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup loaded');
  
    const btn = document.getElementById("execute");
    const progressBar = document.getElementById("progressBar");
    const statusText = document.getElementById("status");
  
    btn.addEventListener("click", async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: downloadPDF
      });
  
      // Reset UI
      updateProgress(0);
      statusText.textContent = "Mulai mengunduh...";
    });
  
    // Terima progress dari content script
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.type === "downloadProgress") {
        updateProgress(msg.progress);
        statusText.textContent = `${msg.completed}/${msg.total} file terunduh`;
      }
    });
  
    function updateProgress(percent) {
      progressBar.style.width = `${percent}%`;
    }
  });
  
  function downloadPDF() {
    const buttons = document.querySelectorAll('#DownloadButton');
    const totalFiles = buttons.length;
    let completedFiles = 0;
  
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.click();
        completedFiles++;
  
        const progress = Math.round((completedFiles / totalFiles) * 100);
  
        chrome.runtime.sendMessage({
          type: "downloadProgress",
          completed: completedFiles,
          total: totalFiles,
          progress
        });
  
      }, 1500); // delay agar tidak overload
    });
  }
  