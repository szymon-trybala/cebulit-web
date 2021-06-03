export interface BrandGroup<T> {
  brand: string;
  products: T[];
}

export interface AvailableFilters {
  minPrice: number;
  maxPrice: number;
  processors: BrandGroup<string>[];
  ramCapacities: number[];
  graphicsCards: BrandGroup<string>[];
  storageCapacities: number[];
  cases: BrandGroup<string>[];
}
