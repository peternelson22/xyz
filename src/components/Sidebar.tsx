import { useProductContext } from '../context/product_context';
import { FaTimes } from 'react-icons/fa';
import { navLinks } from '../data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductContext() as any;

  return (
    <div>
      <aside
        className={`fixed top-0 left-0 w-full h-full bg-white transition-all duration-150 ease-linear md:hidden ${
          isSidebarOpen ? 'translate-x-0 z-[999px]' : '-translate-x-full -z-[1]'
        }`}
      >
        <div className='flex items-center justify-between p-4'>
          <img
            src='data:image/png;base64,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'
            alt='logo'
            className='h-14 w-14 object-contain rounded-md'
          />
          <div className='text-3xl bg-transparent text-gray-500 cursor-pointer mt-1 transition duration-150 ease-out hover:text-gray-300'>
            <button onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
        </div>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                onClick={closeSidebar}
                className='block text-left text-base capitalize py-4 px-6 tracking-wider transition-all duration-150 ease-linear hover:px-4 hover:py-4 hover:pl-8 hover:text-gray-600 hover:bg-slate-100'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
export default Sidebar;
