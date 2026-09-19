export type ProductCategory =
  | "mustard"
  | "groundnut"
  | "sesame"
  | "combo";

export type ProductType =
  | "kachi-ghani"
  | "pure"
  | "premium"
  | "cold-pressed"
  | "filtered"
  | "combo";

export interface ProductVariant {
  weight: string;
  price: number;
  mrp: number;
  discount: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  productType: ProductType;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  variants: ProductVariant[];
  highlights: string[];
  ingredients: string;
  howToUse: string;
  storage: string;
  information: string;
  shipping: string;
  featured?: boolean;
  bestseller?: boolean;
  newest?: boolean;
  popular?: number;
}

export interface CartItem {
  productId: string;
  weight: string;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  product: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
