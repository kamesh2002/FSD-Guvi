//  1.Function to fetch all countries and filter those in Asia
async function fetchAsianCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
  
     
      const asianCountries = countries.filter(country => 
        country.region === 'Asia'
      );
  
      console.log(asianCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  fetchAsianCountries();


//   // Function to fetch all countries and filter those with population less than 200,000
// async function fetchCountriesWithSmallPopulation() {
//     try {
//       const response = await fetch('https://restcountries.com/v3.1/all');
//       const countries = await response.json();
  
     
//       const smallPopulationCountries = countries.filter(country => 
//         country.population < 200000
//       );
  
//       console.log(smallPopulationCountries);
//     } catch (error) {
//       console.error('Error fetching countries:', error);
//     }
//   }
//   fetchCountriesWithSmallPopulation();
  
  




  //2. Function to fetch all countries and filter those with a population of less than 200,000
async function fetchSmallPopulationCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
  
      
      const smallPopulationCountries = countries.filter(country => 
        country.population < 200000
      );
  
      console.log(smallPopulationCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  fetchSmallPopulationCountries();
  




  // 3.Function to fetch all countries and print their name, capital, and flag
async function fetchAndPrintCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      countries.forEach(country => {
        console.log(`Name: ${country.name.common}`);
        console.log(`Capital: ${country.capital ? country.capital[0] : 'N/A'}`);
        console.log(`Flag: ${country.flags.png}`);
        console.log('-----------------------');
      });
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  fetchAndPrintCountries();








  // 4. Function to fetch all countries and print their total population
async function fetchAndPrintTotalPopulation() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
  
      
      const totalPopulation = countries.reduce((total, country) => {
        return total + country.population;
      }, 0);
  
      console.log(`Total Population: ${totalPopulation}`);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  fetchAndPrintTotalPopulation();
  
  




  // 5. Function to fetch all countries and print those that use US dollars as currency
async function fetchAndPrintUSDollarCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json(); 
      countries.forEach(country => {
        if (country.currencies && Object.keys(country.currencies).includes('USD')) {
          console.log(`Name: ${country.name.common}`);
          console.log(`Capital: ${country.capital ? country.capital[0] : 'N/A'}`);
          console.log(`Flag: ${country.flags.png}`);
          console.log('-----------------------');
        }
      });
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  fetchAndPrintUSDollarCountries();
  