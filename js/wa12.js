const btn = document.querySelector('button');

function randomComic(){

    console.log("Button was clicked!");

    /* Random Number Generator */
    const randomNum = Math.floor(Math.random() * 3000)+1;
    console.log(randomNum);

    /* Fetch API */
    const URL = `https://corsproxy.io/?https://xkcd.com/${randomNum}/info.0.json`;

    fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);

    /* Display Comic */
    const imgURL = data.img;
    const imgAlt = data.alt;
    const title = data.title;

    /* Converts the month to string */
    const dateObj = new Date(data.year, data.month - 1, data.day);
    const options = { month: 'long' };
    const month = dateObj.toLocaleString('en-US', options);

    const date = `${month} ${data.day}, ${data.year}`

    /* Displays the Data */
    const titleElement = document.getElementById('title');
        titleElement.textContent = title;

    const imgElement = document.querySelector('img');
        imgElement.src = imgURL;
        imgElement.alt = imgAlt;

    const dateElement = document.getElementById('date');
        dateElement.textContent = `Publish date: ${date}`;
    })

    .catch(error => {
        console.error('Error:', error);
    });
}

