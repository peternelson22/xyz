import Featured from '../components/Featured';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div className='align-element min-h-screen flex flex-col'>
      <Landing />
      <Featured />
    </div>
  );
};
export default Home;
