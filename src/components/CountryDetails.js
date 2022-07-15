//This is the component that we will render via the react-router-dom's Route, and it should receive the country code (alpha3Code) via the URL.
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

function CountryDetails (props) {
    const {countryDetails,setCountryDetails} = useState([])
    const { alpha3Code } = useParams();

    const {id} = useParams;
    useEffect(() => {
        setCountryDetails();
      }, [id]);
    return (



    <div class="col-7">
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

  export default CountryDetails;