// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-RL9MNSLQTW');

// Send IP to Google Sheet
function getIP(json) {
    fetch('https://script.google.com/macros/s/AKfycbx5vCd1Y7ioNUC57Fi70lvi5eipSkPrwgdMytxCNmWmC4M0cpKU6GXgDYAViY1tCgt9/exec', {
        method: 'POST',
        mode: 'no-cors', // required for Apps Script
        body: JSON.stringify({ ip: json.ip })
    });
}
