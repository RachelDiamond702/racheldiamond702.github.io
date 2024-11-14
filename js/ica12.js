const button = document.getElementById("button");
const apiEndpoint = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

window.addEventListener("load", function() {
    getJoke();
});

button.addEventListener("click", function() {
    getJoke();
});

function getJoke(){
    console.log("getJoke function called!");
    fetch(apiEndpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch the joke');
        }
        
        return response.json();

    })
    .then(data => {

        if (data.type === 'single') {
            console.log("Random Joke: " + data.joke);
            displayRes(data.joke);
        }
    })
    .catch(error => {
        console.error("Error fetching joke:", error);

        alert("Error: " + error.message);
    });
}

function displayRes(jokeText) {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerText = jokeText;
}