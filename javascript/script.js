
// --------------Weather API -----------------------
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "9e1aa651afe24aba1f660f3bd6e430a3";
const city = "Västerås";


const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=sv`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Nätverksrespons var inte ok");
        }
        return response.json();
    })
    .then(data => {
        const weatherInfo = document.getElementById("weatherInfo");
        const location = data.name;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description.toLowerCase();


        if (temperature < 0) {
            weatherInfo.style.color = "lightblue";
        }
        else if (temperature < 10) {
            weatherInfo.style.color = "blue";
        }
        else if (temperature >= 10 && temperature <= 20) {
            weatherInfo.style.color = "orange";
        }
        else if (temperature > 20) {
            weatherInfo.style.color = "red";
        }

        weatherInfo.innerHTML = ` ${temperature}°C in ${location} today`;
        console.log(description);
    })
    .catch(error => {
        console.error("Error fetching weather data:", error)
    });

// ---------------------------mousover mousout on profile picture----------

const profileImage = document.getElementById("profile-image");
const profileMessage = document.getElementById("profile-message");

profileImage.addEventListener("mouseover", mouseOver);
profileImage.addEventListener("mouseout", mouseOut);

function mouseOver() {
    profileMessage.style.visibility = "visible";
}

function mouseOut() {
    profileMessage.style.visibility = "hidden";
}


