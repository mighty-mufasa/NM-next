import { apiSlice } from '../api/apiSlice';
import { CollectionsResponse, CollectionResponse } from '@/shared/interfaces/Collection';

export const collectionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<CollectionsResponse, { offset: number; count: number; sort: string }>({
      query: ({ offset, count, sort }) => ({
        url: `api/collection?offset=${offset}&count=${count}&sort=${sort}`,
        method: 'GET',
      }),
    }),
    getCollection: builder.query<CollectionResponse, {collectionId: string; offset: number, count: number }> ({
      query: ({ collectionId, offset, count }) => ({
        url: `api/collection/${collectionId}?offset=${offset}&count=${count}`,
        method: 'GET',
      }),
    }) 
  }),
});

export const { useGetCollectionsQuery, useGetCollectionQuery  } = collectionsApi;
