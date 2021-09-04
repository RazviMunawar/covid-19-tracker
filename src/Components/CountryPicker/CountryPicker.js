import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css';
import { fetchCountries } from '../../Api';

function CountryPicker( { handleCountryChange }) {
    const [fetchCountry, setFetchCountry] = useState([]);
    
    useEffect(() => {
        const fetchApi = async() => {
            setFetchCountry(await fetchCountries())
        }
        fetchApi();
    }, [setFetchCountry]);

    return (
        <div className="text-center">
            <h3>Pick Country</h3>
            <FormControl className="formControl ">
                <NativeSelect default="" onChange={ (event) => { handleCountryChange(event.target.value) }}>
                    <option value="">Global</option>
                    {
                        fetchCountry.map( (country, index) => {
                            return(
                                <option key={ index } value={ country }>{ country }</option>
                            )
                        })
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
