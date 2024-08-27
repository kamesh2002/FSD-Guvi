// Function to fetch dog facts and a random dog image
function fetchDogFactsAndImage() {
    const factsApiUrl = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';
    const imageApiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Fetch dog facts
    fetch(factsApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayFacts(data))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    // Fetch random dog image
    fetch(imageApiUrl)
        .then(response => response.json())
        .then(data => displayImage(data.message))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Function to display fetched facts in the list
function displayFacts(facts) {
    const factsList = document.getElementById('factsList');
    factsList.innerHTML = ''; // Clear existing facts

    facts.slice(0, 5).forEach(fact => {  // Display first 5 facts only
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = fact.fact;
        factsList.appendChild(listItem);
    });
}

// Function to display the random dog image
function displayImage(imageUrl) {
    const dogImage = document.getElementById('dogImage');
    dogImage.src = imageUrl;
}

// Add event listener to the Fetch Facts button
document.getElementById('fetchFactsBtn').addEventListener('click', fetchDogFactsAndImage);
