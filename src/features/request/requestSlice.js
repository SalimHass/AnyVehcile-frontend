import { apiSlice } from "../../app/api/apiSlice";

export const requestsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        newRequest: builder.mutation({
            query: requestInfo => ({
                url: 'api/service_requests/',
                method: 'POST',
                body: { ...requestInfo }
            }),
            invalidatesTags: ['Request'],
        }),
        userRequestList : builder.query({
            query: () => ({
                url: 'api/user_services/',
            }),
            providesTags: ['Request'],
        }),
    })
})

export const {
    useNewRequestMutation,useUserRequestListQuery
} = requestsSlice