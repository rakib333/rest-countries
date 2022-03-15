const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

};

const displayCountries = countries => {
    const allCountriesHtml = countries.map(country => getCountryHtml(country));
    // console.log(allCountriesHtml);
    const countryContainer = document.getElementById('countries');
    countryContainer.innerHTML = allCountriesHtml.join('');

};

// const getCountryHtml = country => {
//     // console.log(country)
//     return `
//         <div class ='country'>
//             <h2>${country.name.common}</h2>
//             <p>Capital : ${country.capital}</p>
//             <p>Population: ${country.population}</p>
//             <img src='${country.flags.png}'/>
//         </div>
//     `
// }
// destructuring option 1
// const getCountryHtml = country => {
//     const { name, flags } = country;
//     return `
//         <div class ='country'>
//             <h2>${name.common}</h2>
//             <p>Capital : ${country.capital}</p>
//             <p>Population: ${country.population}</p>
//             <img src='${flags.png}'/>
//         </div>
//     `
// }

// destructuring option 2
const getCountryHtml = ({ name, flags, capital, population }) => {
    return `
        <div class ='country'>
            <h2>${name.common}</h2>
            <p>Capital : ${capital}</p>
            <p>Population: ${population}</p>
            <img src='${flags.png}'/>
        </div>
    `
}

loadCountries();

