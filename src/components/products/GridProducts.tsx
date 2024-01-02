import { type Product } from './Product';
import ProductGridItem from '../product/ProductGridItem';
interface Props {
  products: Product[];
}
const GridProducts = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
      {products &&
        products.map((product) => (
          <ProductGridItem
            key={product.id}
            image={
              'https://www.drogarianovaesperanca.com.br/imagens-complete/300x300/paracetamol-500mg-com-20-comprimidos-f54e7f1e07.jpg'
            }
            name={product.name}
            price={5}
            description={product.description}
          />
        ))}
    </div>
  );
};

export default GridProducts;
