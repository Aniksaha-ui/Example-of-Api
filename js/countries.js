const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (data) => {
  const countries = document.getElementById("countries");
  data.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryDetails('${country.name.common}')">Details</button>
    `;
    // const h3 = document.createElement("h3");
    // const p = document.createElement("p");
    // h3.innerText = country.name.common;
    // p.innerText = country.capital;
    // div.appendChild(h3);
    // div.appendChild(p);
    countries.appendChild(div);
  });
};

const loadCountryDetails = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  console.log(country);
  const countrySection = document.getElementById("country-details");
  countrySection.innerHTML = `
    <h3>${country.name}</h3>
    <img src="${country.flags.png}"
    <br>
    <p>Region : ${country.region}</p>
    <p>population :${country.population}</p>
    <p>Language : ${country.languages[0].name}</p>

  `;
};

loadCountries();
