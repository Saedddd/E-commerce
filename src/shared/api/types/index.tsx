export interface IData {
    limit: number;
    products: Array<{
      brand: string;
      desc: string;
      id: number;
      price: number;
      rating: number;
      title: string;
      images?: any;
    }>;
    skip: number;
    total: number;
  }

  export interface ListResponse<T> {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
  }