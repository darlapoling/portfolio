// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-RL9MNSLQTW');

// Send IP to Google Sheet
function getIP(json) {
    fetch('https://script.google.com/macros/s/AKfycbzUFvu6cRnbOOc7oFjP1SJOhpnAI6Lv3fl4ccPIC-QESwQtl0UylEncYh9kLeNRYaEy/exec', {
        method: 'POST',
        mode: 'no-cors', // required for Apps Script
        body: JSON.stringify({ ip: json.ip })
    });
}
