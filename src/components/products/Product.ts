import { Tag } from '@/interface/tag/Tag';
import { type Brand } from '../brand/Brand';


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
