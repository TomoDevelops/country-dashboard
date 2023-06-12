const getAllCountryData = async () => {
    const countryData = await fetch("https://restcountries.com/v3.1/all").then(
        (res) => res.json()
    );
    return countryData;
};

export default getAllCountryData;
