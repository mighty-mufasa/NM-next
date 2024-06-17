import {
<<<<<<< HEAD
    getAccessToken,
    getRefreshToken,
    removeToken,
    setToken,
  } from "@/shared/lib/cookie";
  import {
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
  } from "@reduxjs/toolkit/query";
  import { createApi } from "@reduxjs/toolkit/query/react";
  import { Mutex } from "async-mutex";
  interface RefreshResultData {
    accessToken: string;
  }
  const mutex = new Mutex();
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://79.174.80.17:5000/",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  
  const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const refreshToken = getRefreshToken();
          const refreshResult = await baseQuery(
            { url: "auth/refresh", method: "POST", body: { refreshToken } },
            api,
            extraOptions
          );
  
          if (refreshResult.data) {
            const data: RefreshResultData =
              refreshResult.data as RefreshResultData;
  
            setToken(data.accessToken, "");
            result = await baseQuery(args, api, extraOptions);
          } else {
            console.error("ERROR REFRESH TOKEN");
            removeToken();
          }
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }
  
    return result;
  };
  
  export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
  });
  
=======
  getAccessToken,
  getRefreshToken,
  removeToken,
  setToken,
} from '@/shared/lib/cookie';
import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

interface RefreshResultData {
  accessToken: string;
}

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://nft.levpidoor.ru/',
  prepareHeaders: (headers) => {
    const token = getAccessToken();
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  console.log('BaseQuery args:', args); // Add this for debugging
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
          console.error('No refresh token found');
          removeToken();
          return result;
        }

        console.log('Refreshing token with refreshToken:', refreshToken); // Add this for debugging
        const refreshResult = await baseQuery(
          { url: 'auth/refresh', method: 'GET', headers: { refreshToken } },
          api,
          extraOptions,
        );

        if (refreshResult.data) {
          const data: RefreshResultData =
            refreshResult.data as RefreshResultData;

          setToken(data.accessToken, refreshToken); // Ensure both tokens are set correctly
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.error('ERROR REFRESH TOKEN');
          removeToken();
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
>>>>>>> 01bb2b1 (deploy)
