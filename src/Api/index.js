import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let changableData = url;
    if(country){
        changableData = `${ url }/countries/${ country }`
    }

    try{
        const { data } = await axios.get(changableData);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modifiedData;
    }catch(error){

    }
}


export const fetchCountries = async() =>{
    try {
        const { data: { countries } } =  await axios.get(`${ url }/countries`);
        // console.log(countries)
        return countries.map( (country) => country.name)
    }catch(error){

    }
}