let totalFiles = 0;
let completedFiles = 0;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "startDownload") {
    const buttons = document.querySelectorAll('#DownloadButton');
    totalFiles = buttons.length;
    completedFiles = 0;

    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.click();
      }, index * 1500); // delay agar tidak overload
    });
  }
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "downloadComplete") {
    completedFiles++;
    const progress = Math.round((completedFiles / totalFiles) * 100);

    chrome.runtime.sendMessage({
      type: "downloadProgress",
      completed: completedFiles,
      total: totalFiles,
      progress
    });
  }
});
