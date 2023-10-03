import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products_url as url } from '../utils/constants';

const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className='align-element grid grid-cols-3 gap-5 mt-6'>
      {products.map((product) => {
        const { id, image, price, description, name } = product;
        return (
          <Link to={id} key={id} className='shadow-md p-4'>
            <img
              src={image}
              alt={name}
              className='h-64 w-96 object-cover rounded'
            />
            <div className='flex items-center justify-between'>
              <h3 className='capitalize text-green-400 text-lg'>{name}</h3>
              <p className='text-red-200 font-bold'>{price}</p>
            </div>
            <p className='truncate text-sm'>{description}</p>
          </Link>
        );
      })}
    </section>
  );
};
export default Products;
