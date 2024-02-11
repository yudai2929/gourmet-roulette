export type Shop = {
  id: string;
  name: string;
  logoImage: string;
  access: string;
  address: string;
  open: string;
  close: string;
  budget: {
    average: string;
  };
  urls: {
    pc: string;
  };
  photo: {
    mobile: {
      l: string;
      s: string;
    };
    pc: {
      l: string;
      m: string;
      s: string;
    };
  };
  genre: {
    name: string;
    catch: string;
    code: string;
  };
  lat: number;
  lng: number;
};
