import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const NavItems = [
  { title: 'About', path: '/about' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/' className='flex items-center'>
        <HomeIcon size={24} className='mr-2' />
        <span>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {NavItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
