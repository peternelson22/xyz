import img from '../assets/img.svg';

const Landing = () => {
  return (
    <section className='grid grid-cols-2 mt-8 place-items-center'>
      <div className=''>
        <h1 className='text-5xl'>Welcome to XYZ</h1>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          exercitationem?
        </h4>
      </div>
      <div className=''>
        <img src={img} alt='' />
      </div>
    </section>
  );
};
export default Landing;
