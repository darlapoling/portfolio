// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-RL9MNSLQTW');

// Send IP to Google Sheet
function getIP(json) {
    fetch('https://script.google.com/macros/s/AKfycbzVlTJVRxoDCTaekd4D2q7IoJd8lQJqgCdZJCyPR3nHfW51DXnHfcOasIWnBrGYDBK0/exec', {
        method: 'POST',
        mode: 'no-cors', // required for Apps Script
        body: JSON.stringify({ ip: json.ip })
    });
}
