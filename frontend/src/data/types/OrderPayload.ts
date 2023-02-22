import { OrderLocationdata } from "./OrderLocationdata";

type ProducId = {
    id: number;
}

export type OrderPayload = {
    products: ProducId[];
} & OrderLocationdata;