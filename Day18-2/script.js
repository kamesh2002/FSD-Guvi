// Function to fetch Quran editions from the API and display them
function fetchEditions() {
    const apiUrl = 'http://api.alquran.cloud/v1/edition';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayEditions(data.data))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Function to display fetched editions in the cards
function displayEditions(editions) {
    const editionsContainer = document.getElementById('editionsContainer');
    editionsContainer.innerHTML = ''; // Clear existing content

    // Loop through the editions and create cards
    editions.slice(0, 12).forEach(edition => {  // Display first 12 editions
        const editionCard = document.createElement('div');
        editionCard.className = 'col-md-4 edition-card';
        
        const editionTitle = document.createElement('div');
        editionTitle.className = 'edition-title';
        editionTitle.textContent = edition.name || edition.englishName;

        const editionLanguage = document.createElement('div');
        editionLanguage.className = 'edition-language';
        editionLanguage.textContent = `Language: ${edition.language}`;

        editionCard.appendChild(editionTitle);
        editionCard.appendChild(editionLanguage);
        editionsContainer.appendChild(editionCard);
    });
}

// Add event listener to the Fetch Editions button
document.getElementById('fetchEditionsBtn').addEventListener('click', fetchEditions);
