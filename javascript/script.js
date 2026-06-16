// // --------------buttons go to my projects on github----------------------
// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const url = btn.dataset.url;
//         window.location.href = url;
//     });
// });

// --------------Weather API -----------------------
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "9e1aa651afe24aba1f660f3bd6e430a3";
const city = "Västerås";

const weatherInfoList = [
    "Don't forget to bring an umbrella!",                               // 0: regn
    "Don't forget to put on sunscreen!",                                // 1: sol/klar
    "It's a bit cloudy.",                                               // 2: moln
    "Put on a jacket, it's a bit chilly outside!",                      // 3: kallt
    "Perfect day for hot chocolate!",                                   // 4: snö
    "Windy today, hold on to your hat!",                                // 5: vind
    "It's a bit foggy today, drive safely!",                            // 6: dimma
    "Perfect weather for watching Friends all day long!",               // 7: alltid/standard
    "Enjoy your day!"                                                   // 8: om inget stämmer
];

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
        const weatherMessage = document.getElementById("weatherMessage");
        const weatherAlways = document.getElementById("weatherAlways");

        const location = data.name;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description.toLowerCase();


        if (temperature < 0) {
            weatherInfo.style.color = "lightblue";
            weatherMessage.innerHTML = weatherInfoList[3];
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
        weatherMessage.innerHTML = weatherInfoList[8];

        if (description.includes("regn") || description.includes("skur")) {
            weatherMessage.innerHTML = weatherInfoList[0];
        }
        else if (description.includes("sol") || description.includes("klar")) {
            weatherMessage.innerHTML = weatherInfoList[1];
        }
        else if (description.includes("moln")) {
            weatherMessage.innerHTML = weatherInfoList[2];
        }
        else if (description.includes("snö")) {
            weatherMessage.innerHTML = weatherInfoList[4];
        }
        else if (description.includes("vind") || description.includes("blåst")) {
            weatherMessage.innerHTML = weatherInfoList[5];
        }
        else if (description.includes("dimma") || description.includes("dis")) {
            weatherMessage.innerHTML = weatherInfoList[6];
        }
        weatherAlways.innerHTML = weatherInfoList[7];
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
//---------------------------mousover mousout on persons img -------------------

