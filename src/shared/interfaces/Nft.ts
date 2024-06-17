export interface CollectionId {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  collection: string;
  sort: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Owner {
  _id: string;
  name: string;
  emoji: string;
  __v: number;
}

export interface PriceHistory {
  price: number;
  date: string;
}

export interface Offer {
  owner: Owner;
  price: number;
  expires: string;
}

export interface NftResponse  {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  collectionId: CollectionId;
  price: number;
  __v: number;
  owner: Owner;
  pricehistory: PriceHistory[];
  offers: Offer[];
  isFavorite: boolean;
}

// from schema

// export interface Owner {
//   _id: string;
//   name: string;
//   emoji: string;
//   __v: number;
// }

// export interface Collection {
//   _id: string;
//   name: string;
//   description: string;
//   image_url: string;
//   banner_image_url: string;
//   collection: string;
//   sort: string;
//   createdAt: string;
//   updatedAt: string;
//   id: string;
// }

// export interface PriceHistory {
//   price: number;
//   date: string;
// }

// export interface Offer {
//   owner: Owner;
//   price: number;
//   expires: string;
// }

// export interface NftResponse {
//   _id: string;
//   name: string;
//   description: string;
//   image_url: string;
//   collectionId: Collection;
//   price: number;
//   __v: number;
//   owner: Owner;
//   pricehistory: PriceHistory[];
//   offers: Offer[];
//   isFavorite: boolean;
// }
