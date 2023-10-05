import { NavLink } from 'react-router-dom';
import { navLinks } from '../data';

const NavLinks = () => {
  return (
    <>
      <div className='ml-4 gap-x-3 text-gray-700 text-base font-semibold hidden md:flex'>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.url}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default NavLinks;
