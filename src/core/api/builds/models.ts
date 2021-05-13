interface Product {
    id: number;
    name: string;
    price: number;
}

type MotherboardFormFactor =
    "ATX" | "microATX" | "miniITX";

export interface Case extends Product {
    formFactor: MotherboardFormFactor;
}

export interface GraphicsCard extends Product {
    memoryCapacity: number;
}

export interface Memory extends Product {
    speed: number;
    modules: number;
    capacity: number;
}

export interface Motherboard extends Product {
    socket: string;
    memorySlots: number;
    formFactor: MotherboardFormFactor
}

export interface PowerSupply extends Product {
    power: number;
}

export interface Processor extends Product {
    baseClock: number;
    boostClock: number;
    socket: string;
}

type StorageType = "HDD" | "SSD";

export interface Storage extends Product {
    capacity: number;
    type: StorageType
}

interface ProductSet {
    id: number;
    name: string;
    price: number;
}

export interface Build extends ProductSet {
    processor: Processor;
    motherboard: Motherboard;
    memory: Memory;
    graphicsCard: GraphicsCard;
    storage: Storage[];
    powerSupply: PowerSupply;
    case: Case;
}
