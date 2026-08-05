function getIP(json) {
    // Option A: Display in an element
    const el = document.getElementById('ip-display');
    if (el) el.textContent = "My public IP address is: " + json.ip;
    
    // Option B: Just log it (hidden from user)
    console.log("User IP:", json.ip);
}

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-RL9MNSLQTW');


type="application/javascript">
    function getIP(json) {
      document.write("My public IP address is: ", json.ip);
    }
