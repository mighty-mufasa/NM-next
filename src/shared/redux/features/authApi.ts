import { UserData } from '@/shared/lib/localstorage';
import { apiSlice } from '../api/apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `api/auth/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: `api/auth/signin`,
        method: 'POST',
        body: data,
      }),
    }),
    auth: builder.query({
      query: () => ({
        url: 'api/users/me',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useSignUpMutation, useAuthQuery, useSignInMutation } = authApi;
