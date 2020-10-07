const apiKey = "4d8fb5b93d4af21d66a2948710284366";


const formButton = document.querySelector(".top-banner button");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");


formButton.addEventListener('click', () => {

    let inputVal = input.value;
    let msgTemp = document.createTextNode(inputVal);
    msg.appendChild(msgTemp);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})

