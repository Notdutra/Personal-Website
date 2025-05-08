import { useEffect, useState } from 'react';
import NavbarLayout from './navbar/NavbarLayout';
import NavbarContent from './navbar/NavbarContent';
import DesktopNavbar from './navbar/DesktopNavbar';
import MobileNavbar from './navbar/MobileNavbar';
import useIsDesktop from '../utils/useIsDesktop';

const Navbar = () => {
  const isDesktop = useIsDesktop();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavbarContent
      isDesktop={isDesktop}
      isVisible={isVisible}
      NavbarLayout={NavbarLayout}
      MobileNav={MobileNavbar}
      DesktopNav={DesktopNavbar}
    />
  );
};

export default Navbar;
