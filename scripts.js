function calculateTip(event) {
    event.preventDefault();
    let bill = Number(window.document.getElementById('bill').value);
    let serviceQuality = window.document.getElementById('serviceQuality').value;
    let numberOfPeople = window.document.getElementById('people').value;

    if(bill == "" | serviceQuality == 0) {
        alert("Há campos em branco");
        return;
    }

    if(numberOfPeople == "" | numberOfPeople <= 1) {
        numberOfPeople = 1;
        window.document.getElementById('each').style.display = "none";
    } else {
        window.document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQuality) / numberOfPeople;
    total = total.toFixed(2);
    window.document.getElementById('tip').innerHTML = total;
    window.document.getElementById('totalTip').style.display = "block";
}


window.document.getElementById('totalTip').style.display = "none";
window.document.getElementById('each').style.display = "none";
window.document.getElementById('tipsForm').addEventListener('submit', calculateTip);