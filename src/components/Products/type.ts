import { Sort } from "../../pages/ProductList/type";

export interface Item {
    img: string;
}

export interface ProductProps {
    item: Item;
}

export interface Filters {
    color: string
    size: string
}

export interface ProductsProps {
    sort?: Sort;
    filter?: Filters
}