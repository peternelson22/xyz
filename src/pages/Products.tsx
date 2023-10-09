import { Link } from 'react-router-dom';
import { useProductContext } from '../context/product_context';
import Loading from '../components/Loading';

const Products = () => {
  const { products } = useProductContext() as ProductsState;

  if (products.length < 1) {
    return <Loading />;
  }
  return (
    <section className='mt-6'>
      <h1 className='text-center font-semibold text-4xl'>Our Products</h1>

      <div className='align-element grid grid-cols-3 gap-4 mb-2'>
        {products.map((product: Products) => {
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
