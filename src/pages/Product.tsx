import { useParams } from 'react-router-dom';
import { single_product_url as url } from '../utils/constants';
import { useEffect, useState } from 'react';
import ProductImages from '../components/ProductImages';

const Product = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState<Product>();

  const fetchSingleProduct = async () => {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();

    setSingleProduct(data);
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <section className='align-element mt-16 p-3 min-h-[calc(100vh-11rem)]'>
      <div className='sm:flex items-center justify-center space-x-8'>
        <ProductImages images={singleProduct?.images} />
        <div className='text-lg capitalize'>
          <h1 className='text-base sm:text-2xl text-green-400 font-bold uppercase'>
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
          <p className='my-3 line-clamp-3'>
            <span className='font-bold text-gray-500'>Description: </span>
            {singleProduct?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Product;
