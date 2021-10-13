document.addEventListener('DOMContentLoaded', function () {
    fetch('https://dog.ceo/api/breeds/image/random', {
        method : 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        const dog = document.getElementById('dog');
        dog.innerHTML = `<img src="${data['message']}">`;
    })
    .catch (error => {
        console.log("Error: ", error);
    })
});