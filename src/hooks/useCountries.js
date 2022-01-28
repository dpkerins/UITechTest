import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();
    const countryNames = await json.map(country => {
      return country.name.common
    });

    setCountries(countryNames.sort());
  }
  useEffect(() => getAllCountries(), []);

  return [countries];
}