import {useState,useEffect} from 'react'
import logo from '../../assets/Logo.png'
import { Image,Navbar,NavElement,StyledLink} from './styleNavbar'


const NavbarHome = () => {
 const [scrolled,setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar scrolled={scrolled}>
     <Image src={logo} alt="logo" />
     <NavElement>
      <StyledLink to='signup'>Register</StyledLink>
      <StyledLink to='dashboard'>Dashboard</StyledLink>
     </NavElement>
    </Navbar>
  )
}
export default NavbarHome