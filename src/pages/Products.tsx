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
    <section className='mt-6'>
      <h1 className='text-center font-semibold text-4xl'>Our Products</h1>

      <div className='align-element grid grid-cols-3 gap-4 mb-2'>
        {products.map((product) => {
          const { id, image, price, description, name } = product;
          return (
            <Link to={id} key={id} className='shadow-md p-2 hover:shadow-lg'>
              <img
                src={image}
                alt={name}
                className='h-24 w-40 md:h-64 md:w-96  object-cover rounded'
              />
              <div className='block sm:flex items-center justify-between mt-2'>
                <h3 className='capitalize text-green-400 text-xs sm:text-base'>
                  {name}
                </h3>
                <p className='text-red-200 font-bold text-xs sm:text-sm'>
                  ${price}
                </p>
              </div>
              <p className='truncate text-sm hidden md:block'>{description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Products;
