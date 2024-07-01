const data = {
    "name": " Kamesh J",
    "contactInformation": {
      "email": "kameshmaharajan2002@gmail.com",
      "phone": "9344028529", 
      "github": "https://github.com/kamesh2002"
    },
    "skills": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "experience": [
      {
        "jobTitle": "Part time Full Stack Developer",
        "location": "Coimbatore"
      }
    ],
    "education": [
      {
        "degree": "B.tech Computer Science and business System",
        "institution": "Sri Krishna college of engineering and technology",
        "location": "Coimbatore",
        "graduationDate": "Sep 2021"
      }
    ],
    "certifications": [
      {
        "name": " Currently pursing Full stock Developer",
        "issuingOrganization": "Guvi",
        "issueDate": "June 2024"
      }
    ],
    "languages": [
      "English",
      "Tamil"
    ]
  };
  
  // Using for...in loop for objects
  console.log("Using for...in loop:");
  for (let key in data) {
    if (typeof data[key] === 'object') {
      console.log(key + ":");
      for (let innerKey in data[key]) {
        console.log("  " + innerKey + ": " + data[key][innerKey]);
      }
    } else {
      console.log(key + ": " + data[key]);
    }
  }
  