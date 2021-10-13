document.addEventListener('DOMContentLoaded', function () {
    fetch('https://dog.ceo/api/breeds/image/random', {
        method : 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        const dog = document.getElementById('dog');
        dog.src = `${data['message']}`;
    })
    .catch (error => {
        console.log("Error: ", error);
    })

    document.getElementById('breed-submit').addEventListener('click', event => {
        event.preventDefault();

        let breed = document.getElementById('breed-name').value;
        breed = breed.toLowerCase();

        fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            if (data['status'] === 'success') {
                const dog = document.getElementById('dog');
                dog.src = `${data['message']}`;
            } else {
                alert(`dog breed doesn't exist`)
            }
        })
        .catch(error => {
            console.log('Error', error)
        })

        return false;
    });
});