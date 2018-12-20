var randomContain = document.querySelector(".randomContainer");



function randomQuote() {
    // console.log("Running single Quote");
    fetch(`http://api.techlaunch.io:88/random`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            randomContain.innerHTML +=
             `
            <div class="randomContainer">
            <p>${data.text}</p>
            <p>${data.author}</p>
            <p>${data.source}</p>
            </div>
            `
        })
        .catch(function (error) {
            console.log("Error!")
        })
}
randomQuote();

