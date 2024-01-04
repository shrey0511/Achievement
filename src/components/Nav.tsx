
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* Your logo code */}
          <span className="text-white text-lg font-semibold">Your Logo</span>
        </div>
      </div>
      <div className="text-white text-lg font-semibold flex items-center space-x-4 mr-5">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About Us" />
        <NavItem href="/gallery" label="Gallery" />
        <NavItem href="/contact" label="Contact Us" />
      </div>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className="text-white hover:text-orange-500 transition-colors">{label}</a>
    </Link>
  );
};

export default Nav;
