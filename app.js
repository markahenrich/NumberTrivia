let number;
let loading = true

let factText = document.getElementById('factText');
let btn = document.getElementById('button1').onclick = function() {
    let input = document.getElementById('numField').value; 
    number = input;
    apiRequest(number);
}

function apiRequest(number) {
    
    factText.innerText = 'Loading...'

    if (number != null && parseInt(number)) {
        fetch(`http://numbersapi.com/${number}/?json`)
        .then(response => response.json())
        .then(json => { loading = false; factText.innerText = json.text });
    } else {
        factText.innerText = 'Sorry, enter a number!'
    }
}