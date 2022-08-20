
const baseURL = 'http://api.coinlayer.com/live?access_key=346541eebd3a880fc01f6aaaf97a8952';

//const row = document.querySelector('.btc-rate');
const tickers = ['BTC', 'ETH', 'USDT', 'LTC', 'BNB', 'XLM', 'AION', 'ADA', 'XMR', 'BCD', 'BCH', 'MANA', 'SMART', 'RUFF', 'LINK' ]


function fetchResults() {
    fetch(baseURL)
    .then(function(result) {
        return result.json();
    })
    .then(function(data) {
        displayResults(data);
    })
}

function displayResults(data) {
    console.log(data);
    console.log(Array.isArray(data.rates))
    Object.entries(data.rates).forEach(entry => {
        const [ticker, rate] = entry
        console.log(ticker.toLowerCase())
        if (tickers.includes(ticker)){
            console.log('match')
            let row = document.querySelector('.' + ticker)
            console.log(row)
            let value = document.createElement('p');
            value.innerText = '$ ' + data.rates[ticker];
            row.appendChild(value);
        }
    })
}

fetchResults();