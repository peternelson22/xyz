import { Link } from 'react-router-dom';
import { useProductContext } from '../context/product_context';
import Loading from '../components/Loading';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const { products } = useProductContext() as ProductsState;

  if (products.length < 1) {
    return <Loading />;
  }

  return <ProductsList products={products} />;
};
export default Products;
