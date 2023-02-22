import { ProductType } from "./ProductType"

export type OrderType = {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    totalPrice: number;
    products: ProductType[];
}