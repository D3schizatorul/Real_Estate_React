import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '8a2e6389e2msh33bc134c06fb2a8p1caa54jsnafeb76229918',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}