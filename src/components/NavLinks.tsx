import { NavLink } from 'react-router-dom';
import { navLinks } from '../data';

const NavLinks = () => {
  return (
    <>
      <div className='flex ml-4 gap-x-3'>
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
