export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  reviews?: Review[];
}

export interface Review {
  id: number;
  review: string;
  rating: number;
}

export interface ProductsPageProps {
  products: Product[];
}