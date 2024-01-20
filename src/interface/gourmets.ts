export interface GetGourmetsQuery {
  lat: number;
  lng: number;
  range: number;
}

export interface GetGourmetsResponse {
  id: string;
  name: string;
  logo_image: string;
}
