

document.getElementById('search-button').addEventListener('click', function() {
    const word = document.getElementById('search-input').value;
    if (word) {
        fetchWordDefinition(word);
    } else {
        displayError('Please enter a word to search.');
    }
});

/**
 * Fetches the definition of the word from the Dictionary API.
 * @param {string} word - The word to search for.
 */
function fetchWordDefinition(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found.');
            }
            return response.json();
        })
        .then(data => displayResults(data))
        .catch(error => displayError(error.message));
}

/**
 * Displays the results on the webpage.
 * @param {Object} data - The data returned from the API.
 */
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const word = data[0].word;
    const phonetics = data[0].phonetics.map(p => p.text).join(', ');
    const meanings = data[0].meanings.map(meaning => `
        <div class="meaning">
            <h3>${meaning.partOfSpeech}</h3>
            <p>${meaning.definitions[0].definition}</p>
        </div>
    `).join('');

    resultsDiv.innerHTML = `
        <h2>${word}</h2>
        <p><strong>Phonetics:</strong> ${phonetics}</p>
        ${meanings}
    `;
}

/**
 * Displays an error message on the webpage.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p class="text-danger">${message}</p>`;
}
