interface Product {
  id: number;
  name: string;
  price: number;
}

export enum MotherboardFormFactor {
  "ATX",
  "microATX",
  "miniITX",
}

export interface Case extends Product {
  formFactor: MotherboardFormFactor;
}

export interface GraphicsCard extends Product {
  memoryCapacity: number;
}

export interface Memory extends Product {
  speed: number;
  latency: number;
  modules: number;
  capacity: number;
}

export interface Motherboard extends Product {
  socket: string;
  memorySlots: number;
  formFactor: MotherboardFormFactor;
}

export interface PowerSupply extends Product {
  power: number;
}

export interface Processor extends Product {
  cores: number;
  threads: number;
  baseClock: number;
  boostClock: number;
  socket: string;
}

export enum StorageType {
  "HDD",
  "SSD",
}

export enum StorageInterface {
  "SATA",
  "NVME",
}

export interface Storage extends Product {
  capacity: number;
  type: StorageType;
  interface: StorageInterface;
}

interface ProductSet {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Build extends ProductSet {
  processor: Processor;
  motherboard: Motherboard;
  memory: Memory;
  graphicsCard?: GraphicsCard;
  storage: Storage[];
  powerSupply: PowerSupply;
  case: Case;
  isGeneratedForUser: boolean;
}

export interface BuildsFiltersParams {
  minPrice?: number;
  maxPrice?: number;
  processorIds?: number[];
  ramCapacities?: number[];
  graphicsCardIds?: number[];
  storageCapacities?: number[];
  caseIds?: number[];
  orderBy?: "name" | "nameDescending" | "price" | "priceDescending";
}

export const loggedInOrderByOptions = [
  { label: "Dopasowanie do użytkownika", value: "tagMatch" },
];

export const basicBuildsOrderByOptions = [
  { label: "Nazwa: od A do Z", value: "name" },
  { label: "Nazwa: od Z do A", value: "nameDescending" },
  { label: "Cena: od najniższej", value: "price" },
  { label: "Cena: od najwyższej", value: "priceDescending" },
];
