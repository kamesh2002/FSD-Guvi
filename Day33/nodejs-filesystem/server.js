const express = require('express'); // Import Express
const fs = require('fs'); // Import File System module
const path = require('path'); // Import Path module

const app = express(); // Create Express app
const PORT = 5001; // Define the port number

// Define the folder to store files
const folderPath = path.join(__dirname, 'files');

// Ensure the folder exists, or create it
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}


// API to create a new text file
app.post('/create-file', (req, res) => {
    const currentDateTime = new Date().toISOString(); // Get current date and time
    const filename = `${currentDateTime.replace(/:/g, '-')}.txt`; // Replace ':' to make filename valid
    const filePath = path.join(folderPath, filename); // Full file path

    // Write the current timestamp into the file
    fs.writeFile(filePath, currentDateTime, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating file', error: err });
        }
        res.status(201).json({ message: 'File created successfully', filename });
    });
});

// API to retrieve all text files
app.get('/get-files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading files', error: err });
        }
        res.status(200).json({ files });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
