import { Brand } from "../brand/Brand";
import { Tag } from "../tag/Tag";

export interface Product {
    id: number;
    brand_id: number;
    name: string;
    description: string;
    prescription_required: number;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    brand?: Brand;
    tags?: Tag[];
}