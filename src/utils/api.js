// all api work had been done here 

import axios from "axios";

const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: { hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key':'c9e6e71b6dmshe66f1bf3b11d3abp1d2447jsnf34f5c1371e3',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi=async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}