interface UserLogin {
  email: string;
  password: string;
}

interface Products {
  category: string;
  colors: string[];
  company: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
}
interface Images {
  filename?: string;
  height?: number;
  id?: string;
  size?: number;
  thumbnails?: ThumbNails;
  type?: string;
  url: string;
  width?: number;
}
interface Product {
  category: string;
  colors: string[];
  company: string;
  description: string;
  images: Images[];
  id: string;
  name: string;
  price: number;
  reviews: number;
  stars: number;
  stock: number;
}

interface ThumbNails {
  full: ThumbNailsDetails;
  large: ThumbNailsDetails;
  small: ThumbNailsDetails;
}

interface ThumbNailsDetails {
  height: number;
  width: number;
  url: string;
}
