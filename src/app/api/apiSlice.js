import {createApi, fetchBaseQuery, fetchBBaseQuery} from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "../../features/auth/authSlice"


const baseQuery =fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
    credentials :'include',
    prepareHeaders:(headers, {getState})=>{
        const token = getState().auth.token
        if (token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Request'],
    endpoints: builder => ({})
})

