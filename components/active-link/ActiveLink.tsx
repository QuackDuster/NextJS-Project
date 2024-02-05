'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  title: string;
}
// text-blue-500
export const ActiveLink = ({ path, title }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`hover:underline hover:text-blue-200 mr-2 transition-all ${
        pathName === path ? 'text-blue-500' : ''
      }`}
      key={path}
      href={path}
    >
      {title}
    </Link>
  );
};
