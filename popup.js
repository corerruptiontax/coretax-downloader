document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup loaded');
    document.getElementById("execute").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: downloadPDFNOnDelay
            });
        });
    });

    function downloadPDF() {
        const buttons = document.querySelectorAll('#DownloadButton');
        let delay = 2000; // 2000 mili detik atau 2 detik, ubah bila perlu.

        let counter = 0;
        const floatingCounter = document.createElement('div');
        floatingCounter.style.position = 'fixed';
        floatingCounter.style.top = '50px';
        floatingCounter.style.right = '10px';
        floatingCounter.style.padding = '10px';
        floatingCounter.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        floatingCounter.style.color = 'white';
        floatingCounter.style.borderRadius = '5px';
        floatingCounter.style.zIndex = '1000';
        floatingCounter.style.maxHeight = '500px';
        floatingCounter.style.overflowY = 'auto';
        floatingCounter.innerHTML = `<p>Dokumen terunduh: <span id="counterDownload">0</span>/${buttons.length} <ul id="downloadList"></ul></p>`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Tutup';
        removeButton.style.marginTop = '10px';
        removeButton.addEventListener('click', () => {
            floatingCounter.remove();
        });
        floatingCounter.appendChild(removeButton);

        document.body.appendChild(floatingCounter);
        const downloadList = document.getElementById('downloadList');
        const counterElement = document.getElementById('counterDownload');

        buttons.forEach((button, index) => {
            
            setTimeout(() => {
                counter++;
                const closestTr = button.closest('tr');
                let customerName = closestTr.children[3].textContent;
                customerName = customerName.toUpperCase().replace("NAMA PEMBELI", '');
                const listItem = document.createElement('li');
                listItem.textContent = counter+' '+customerName.trim();
                counterElement.textContent = counter;
                downloadList.appendChild(listItem);
                button.click();
                console.log(`PDF terunduh ${index + 1}`);
            }, delay);
        });

        const totalDelay = delay * buttons.length;
        /* setTimeout(() => {
            floatingCounter.remove();
        }, totalDelay+10000); */
    }

    function downloadPDFNOnDelay() {
        const buttons = document.querySelectorAll('#DownloadButton');
        let delay = 1000; // 2000 mili detik atau 2 detik, ubah bila perlu.

        let counter = 0;
        const floatingCounter = document.createElement('div');
        floatingCounter.style.position = 'fixed';
        floatingCounter.style.top = '50px';
        floatingCounter.style.right = '10px';
        floatingCounter.style.padding = '10px';
        floatingCounter.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        floatingCounter.style.color = 'white';
        floatingCounter.style.borderRadius = '5px';
        floatingCounter.style.zIndex = '1000';
        floatingCounter.style.maxHeight = '500px';
        floatingCounter.style.overflowY = 'auto';
        floatingCounter.innerHTML = `<p>Mengunduh ${buttons.length} dokumen....</p>`;
        

        buttons.forEach((button, index) => {
            
            setTimeout(() => {
                counter++;
                const closestTr = button.closest('tr');
                let customerName = closestTr.children[3].textContent;
                customerName = customerName.toUpperCase().replace("NAMA PEMBELI", '');
                button.click();
                console.log(`PDF terunduh ${index + 1} - ${customerName.trim()}`);
            }, delay);
        });
    }

});
