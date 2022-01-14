const resultBtn = document.getElementById('submitBtn');
const inputVal = document.getElementById('country');

window.onload = (response) => {
    fetch('https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=true&allowNull=0')
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Covid Stats</h2>';
        output += '<ul>';
        output += `
            <li>Total Confirmed: ${data.cases}</li>
            <li>Total Recovered: ${data.recovered}</li>
        `;
        output += '</ul>';
        document.getElementById('response').innerHTML = output;
        // console.log(data.Global.TotalConfirmed);
        console.log(data.Global);
    }
        );
    // console.log('This Button works!');
};

resultBtn.addEventListener('click', (e) => {
    fetch(`https://disease.sh/v3/covid-19/countries/${inputVal.value}?yesterday=true&twoDaysAgo=false&strict=false&allowNull=0`)
    .then(response => response.json())
    .then(data => {
        // console.log(data.deaths)
        // console.log(data.cases)
        console.log(data)
        
        let output = '<h2>Covid Stats</h2>';
        output += '<ul>';
        output += `
            <li>Country: ${data.country}</li>
            <li>Total Cases: ${data.cases}</li>
            <li>Total Active Cases: ${data.active}</li>
            <li>Total Recovered Cases: ${data.recovered}</li>
            <li>Total Deaths: ${data.deaths}</li>
        `;
        output += '</ul>';
        document.getElementById('response-by-country').innerHTML = output;
    })
    .catch(err => {
        console.error(err);
    });
    e.preventDefault();
    inputVal.value = '';
})