document.addEventListener('DOMContentLoaded', function () {
    // Define the API endpoint
    const apiUrl = 'https://yahoo-finance127.p.rapidapi.com/price/PAYTM.NS';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
    };

    // Function to fetch data from the API
    async function fetchData() {
        try {
            const response = await fetch(apiUrl, options);
            const data = await response.json();
            updateHTML(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to update HTML content with the fetched data
    function updateHTML(data) {
        // Update general information
        document.getElementById('symbol').innerText = data.symbol;
        document.getElementById('shortName').innerText = data.shortName;

        // Update market data
        document.getElementById('marketCap').innerText = data.marketCap.fmt;
        document.getElementById('regularMarketPrice').innerText = data.regularMarketPrice.fmt;

        // Update day range
        document.getElementById('regularMarketDayLow').innerText = data.regularMarketDayLow.fmt;
        document.getElementById('regularMarketDayHigh').innerText = data.regularMarketDayHigh.fmt;

        // Add more updates as needed

        console.log('Data updated successfully.');
    }

    // Trigger data fetch on page load
    fetchData();
});