// this is the navbar
// when the navbar is on the home page, hid the logo
// otherwise, always have the logo in the upper left corner


import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a className="text-gray-800 hover:text-gray-600">MyLogo</a>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li>
              <Link href="/experience">
                <a className="text-gray-800 hover:text-gray-600">EXPERIENCE</a>
              </Link>
            </li>
            <li>
              <Link href="/creative">
                <a className="text-gray-800 hover:text-gray-600">CREATIVE</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-gray-800 hover:text-gray-600">ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-gray-800 hover:text-gray-600">CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
