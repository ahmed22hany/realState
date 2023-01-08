import React from 'react'
import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url: string) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '08c14d6af8msh280257fd9edddcdp158eb2jsnd98c2ee1d9db',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}
