function trackIP() {
    const ipInput = document.getElementById('ipInput');
    const resultDiv = document.getElementById('result');
    const ipAddress = ipInput.value;

    fetch(`https://ipapi.co/${ipAddress}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const yourIP = data.ip;
            const country = data.country_name;
            const city = data.city;
            const region = data.region;
            const org = data.org;
            const postal = data.postal
            const latitude = data.latitude
            const longitude = data.longitude
            resultDiv.innerHTML = `
                Tracked IP Address: ${ipAddress}<br><br>
                Country: ${country}<br><br>
                City: ${city}<br><br>
                Pincode: ${postal}<br><br>
                Region: ${region}<br><br>
                Latitude: ${latitude}<br><br>
                Longitude: ${longitude}<br><br>
                ISP:${org}
            `;
            resultDiv.style.display = 'block';
        })
        .catch(error => {
            resultDiv.innerHTML = `An error occurred: ${error}`;
            resultDiv.style.display = 'block';
        });
}