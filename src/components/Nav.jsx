import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [navHidden, setNavHidden] = useState(true);
  const toggleNav = () => setNavHidden(!navHidden);
  return (
    <header className="padding-x py-8 2-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className={`flex-1 md:flex justify-center items-center gap-16 ${navHidden ? 'hidden' : 'flex flex-col gap-10'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
              href={item.href}
              className="font-montserrat leading-normal text-lg text-black">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/"
        className="font-montserrat leading-normal text-lg text-black hidden lg:block">
          Sign in / Explore now
        </a>
        <div className="md:hidden block">
          <img 
            src={hamburger} 
            alt="Menu"
            width={24}
            height={24}
            onClick={toggleNav}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;