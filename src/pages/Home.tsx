import { useReducer, useState } from 'react';
import Featured from '../components/Featured';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div className='align-element min-h-[calc(100vh-7rem)] flex flex-col'>
      <Landing />
      <Featured />
    </div>
  );
};
export default Home;
