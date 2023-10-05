import img from '../assets/img.svg';
import { useProductContext } from '../context/product_context';

const Landing = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left mt-8 place-items-center'>
      <div className=''>
        <h1 className='text-2xl md:text-5xl '>
          Welcome to{' '}
          <span className='text-3xl md:text-6xl text-green-500 font-bold'>
            XYZ
          </span>{' '}
        </h1>
        <h4 className='my-4 font-semibold text-base md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at
          numquam, illo dolore tempore iste quis atque voluptates, deserunt
        </h4>
      </div>
      <div className='hidden sm:inline-block'>
        <img src={img} alt='' className='animate-pulse' />
      </div>
    </section>
  );
};
export default Landing;
