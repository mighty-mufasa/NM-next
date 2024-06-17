import { apiSlice } from '../api/apiSlice';
import { NftResponse } from '@/shared/interfaces/Nft';

export const nftApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNft: builder.query<NftResponse, { nftId : string }>({
      query: ({ nftId }) => ({
        url: `api/nft/${nftId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetNftQuery } = nftApi;
