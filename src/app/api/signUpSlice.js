import { apiSlice } from "./apiSlice";

export const signUpApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signUp: builder.mutation({
            query: userSignUpInfo => ({
                url: 'api/register/',
                method: 'POST',
                body: { ...userSignUpInfo }
            })
        }),
    })
})

export const {
    useSignUpMutation
} = signUpApiSlice