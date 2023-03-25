import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'f72a53cb71msh1b06af1b705b57bp168cc0jsn1833c3828909',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

 const baseUrl = 'https://coinranking1.p.rapidapi.com';

 const createRequest = (url) => ({url, headers:cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'crptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const{
    useGetCryptosQuery,
}= cryptoApi;

