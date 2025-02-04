/** Задаем глобальные типы сущностям */
/** Определяем глобальные enum */
export interface Product {
  id: number
  name: string
  price: number
  preview: string
  description: string
  maxAvailable: number
  categoryId: number[]
  back: ImageBackgroundAppereance
  photos: Array<{ url: string; appearence: ImageBackgroundAppereance }>
}


export interface Address {
  id: number
  address: string
  city: string
  zip: string
  views: string[]
  description: string
  categoryId: number[]
  //back: ImageBackgroundAppereance
  //map: Array<{ url: string; appearence: ImageBackgroundAppereance }>
}

export type ProductPreview = Omit<
  Product,
  'categoryId' | 'photos' | 'description'
>

export type OrderProduct = ProductPreview & { numItemsToBuy: number }

export interface Category {
  id: number
  name: string
  productCount: number
}

export interface ProductFilter {
  categoryId?: string
  priceFrom?: number
  priceTo?: number
  query?: string
}

export interface ShopInfo {
  name: string
  logo: string
}

export enum ApiEndpoint {
  InitialData = 'getInitialData',
  ProductInfo = 'getProductInfo',
  FilteredProducts = 'getFilteredProducts',
}

export enum ImageBackgroundAppereance {
  Rose = 'rose',
  Grey = 'grey',
  Blue = 'blue',
  Beige = 'beige',
  Violet = 'violet',
}

export interface Orgs {
  key: string
  name: string
}



