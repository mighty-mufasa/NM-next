export interface Collection {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  collection: string;
  sort: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  totalNftCount: number;
  totalNftPrice: number;
  lowestNftPrice: number;
}

export interface NftItems {
  _id: string;
  name: string;
  description: string | null;
  image_url: string;
  collectionId: string;
  price: number;
  owner: string;
  id: string;
}

export interface CollectionsResponse {
  data: Collection[];
  total: number;
}

export interface CollectionResponse {
  collection: Collection;
  data: NftItems[];
  total: number;
}

