import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />

      <Footer />
    </>
  );
};
export default Layout;
