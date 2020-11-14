$("#getWeatherForecast").click(function () {
    var city = document.getElementById("city").value;
    console.log(city);
    const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=74511f9027025c47644c9926561f47b9";
    async function getWeatherForecast() {
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        var data = await response.json();
        const temp = data["main"].temp;
        const feels_like = data["main"].feels_like;
        document.getElementById("temp").textContent = temp;
        document.getElementById("feels_like").textContent = feels_like;

    }
    getWeatherForecast();
});