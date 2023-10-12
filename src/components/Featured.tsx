import { Link } from 'react-router-dom';
import { useProductContext } from '../context/product_context';
import { formatPrice } from '../utils/helper';

const Featured = () => {
  const { products }: { products: Products[] } =
    useProductContext() as ProductsState;
  return (
    <div className='grid grid-cols-3 gap-x-5'>
      {products.slice(2, 5).map((p: Products) => (
        <Link to={`products/${p.id}`} key={p.id} className='my-10'>
          <img
            src={p.image}
            className='h-32 w-40 sm:h-64 sm:w-80 object-cover rounded-md hover:scale-105 hover:shadow hover:border-gray-500'
          />
          <div className='block sm:flex items-center justify-between my-2 capitalize font-semibold'>
            <p className='text-sm sm:text-base'>{p.name}</p>
            <p className='text-red-400 font-normal sm:font-bold'>
              {formatPrice(p.price)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Featured;
