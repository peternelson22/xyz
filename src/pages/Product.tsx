import { useParams } from 'react-router-dom';
import { single_product_url as url } from '../utils/constants';
import { useEffect } from 'react';
import ProductImages from '../components/ProductImages';
import { useProductContext } from '../context/product_context';
import Loading from '../components/Loading';
import GeneralError from '../components/GeneralError';

const Product = () => {
  const { id } = useParams();

  //@ts-ignore
  const { fetchSingleProduct, product, productLoading, productError } =
    useProductContext();

  const { images, name, price, category, company, description } = product;

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (productLoading) {
    return <Loading />;
  }

  if (productError) {
    return <GeneralError />;
  }

  return (
    <section className='align-element mt-16 p-3 min-h-[calc(100vh-11rem)]'>
      <div className='sm:flex items-center justify-center space-x-8'>
        <ProductImages images={images} />
        <div className='text-lg capitalize'>
          <h1 className='text-base sm:text-2xl text-green-400 font-bold uppercase'>
            {name}
          </h1>
          <h3 className='text-red-300'>${price}</h3>
          <p className='my-3'>
            <span className='font-bold text-gray-500'>Category: </span>
            {category}
          </p>
          <p className='my-3'>
            <span className='font-bold text-gray-500'>Comapany:</span> {company}
          </p>
          <p className='my-3 line-clamp-3'>
            <span className='font-bold text-gray-500'>Description: </span>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Product;
