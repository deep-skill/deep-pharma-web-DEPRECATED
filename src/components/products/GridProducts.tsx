import { type Product } from './Product';
import ProductGridItem from '../product/ProductGridItem';
interface Props {
  products: Product[];
}
const GridProducts = ({ products }: Props) => {
  let imgArray: string[] = [
    'https://farmaonline.vtexassets.com/arquivos/ids/392909-500-auto?v=637998448610070000&width=500&height=auto&aspect=true',
    'https://farmaonline.vtexassets.com/arquivos/ids/335562-500-auto?v=637814132961470000&width=500&height=auto&aspect=true',
    'https://farmaonline.vtexassets.com/arquivos/ids/587275-500-auto?v=638119081848770000&width=500&height=auto&aspect=true',
    'https://farmaonline.vtexassets.com/arquivos/ids/1117539-500-auto?v=638324728328370000&width=500&height=auto&aspect=true',
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10 p-16">
      {products &&
        products.map((product, index) => (
          <ProductGridItem
            key={product.id}
            image={
              imgArray[index]
                ? imgArray[index]
                : 'https://www.drogarianovaesperanca.com.br/imagens-complete/300x300/paracetamol-500mg-com-20-comprimidos-f54e7f1e07.jpg'
            }
            product={product}
          />
        ))}
    </div>
  );
};

export default GridProducts;
