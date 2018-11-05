export enum Category {
    Adventure,
    Detective,
    Fantasy
}

export interface ProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}

