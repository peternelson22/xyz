import { Link } from 'react-router-dom';
import { products } from '../api';

const Featured = () => {
  return (
    <div className='grid grid-cols-3 gap-x-5'>
      {products
        .filter((p) => p.featured === true)
        .map((p) => (
          <Link to={`products/${p.id}`} key={p.id} className='my-10'>
            <img src={p.image} className='h-64 w-80 object-cover' />
          </Link>
        ))
        .slice(0, 3)}
    </div>
  );
};
export default Featured;
