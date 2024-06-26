const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = 'https://dog.ceo/api/breeds/image/random';


async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.message;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", () => {
    let isLoaded = image.complete;

    if (isLoaded) {
        fetchHandler()
    }
})