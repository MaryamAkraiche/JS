const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput) {
        fetchAge(nameInput);
    } else {
        alert('Please enter a name.');
    }
});


function fetchAge(name) {

        fetch(`https://api.agify.io/?name=${name}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                displayResult(data);
            })
        .catch((error) => {
            console.log('There was a problem with the fetch operation:', error);
        });
}

function displayResult(data) {
    const container = document.getElementById('container');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `Name: ${data.name}, Age: ${data.age}`;
    container.appendChild(resultDiv);
};