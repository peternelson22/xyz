import { useParams } from 'react-router-dom';
import { products } from '../api';

const Product = () => {
  const { id } = useParams();
  const singleProduct = products.find((p) => p.id === id);
  return (
    <section className='align-element mt-16 min-h-[calc(100vh-4rem)]'>
      {
        <div className='flex items-center space-x-8'>
          <img
            src={singleProduct?.image}
            alt={singleProduct?.name}
            className='h-52 w-52 md:h-96 md:w-96 object-cover'
          />
          <div className='text-lg capitalize'>
            <h1 className='text-2xl text-green-400 font-bold uppercase'>
              {singleProduct?.name}
            </h1>
            <h3 className='text-red-300'>${singleProduct?.price}</h3>
            <p className='my-3'>
              <span className='font-bold text-gray-500'>Category: </span>
              {singleProduct?.category}
            </p>
            <p className='my-3'>
              <span className='font-bold text-gray-500'>Comapany:</span>{' '}
              {singleProduct?.company}
            </p>
            <p className='my-3'>
              <span className='font-bold text-gray-500'>Description: </span>
              {singleProduct?.description}
            </p>
          </div>
        </div>
      }
    </section>
  );
};
export default Product;
