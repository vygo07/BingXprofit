function saveKeys() {
    localStorage.setItem("apiKey", document.getElementById("apiKey").value);
    localStorage.setItem("secretKey", document.getElementById("secretKey").value);
}

async function loadProfit() {
    const res = await fetch('/api/profit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            apiKey: localStorage.getItem("apiKey"),
            secretKey: localStorage.getItem("secretKey")
        })
    });
    const data = await res.json();
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}