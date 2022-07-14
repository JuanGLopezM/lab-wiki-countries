//  Displays the list of links with the country names. Each link should be a react-router-dom
//  Link which we will use to send the country code (alpha3Code) via the URL.

import { useState, useEffect } from 'react';
import { useParams, link } from 'react-router-dom';
import countriesData from '../countries.json';

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);
  return (
    <div class="container">
      <div class="row">
        <div class="col-5">
          <div class="list-group">
            {countries.map((country) => {
              return (
                <a class="list-group-item list-group-item-action" href=`country-details/${country.alfa3Code}`>
                  {country.name.official}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryList;
