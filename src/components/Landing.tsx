import img from '../assets/img.svg';

const Landing = () => {
  return (
    <section className='grid grid-cols-2 mt-8 place-items-center'>
      <div className=''>
        <h1 className='text-5xl'>
          Welcome to{' '}
          <span className='text-6xl text-green-500 font-bold'>XYZ</span>{' '}
        </h1>
        <h4 className='my-4 font-semibold text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          exercitationem?
        </h4>
      </div>
      <div className=''>
        <img src={img} alt='' className='animate-pulse' />
      </div>
    </section>
  );
};
export default Landing;
