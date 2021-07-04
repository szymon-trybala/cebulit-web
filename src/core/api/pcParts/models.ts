export interface BrandGroup<T> {
  brand: string;
  products: T[];
}

export interface NamedProduct {
  id: number;
  name: string;
}

export interface AvailableFilters {
  minPrice: number;
  maxPrice: number;
  processors: BrandGroup<NamedProduct>[];
  ramCapacities: number[];
  graphicsCards: BrandGroup<NamedProduct>[];
  storageCapacities: number[];
  cases: BrandGroup<NamedProduct>[];
}
