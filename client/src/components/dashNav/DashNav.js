import { Nav,Axon,Icon,StyledIcon } from "./styleDashNav"
import Logo from '../../assets/Logo.png'
import woman from '../../assets/woman.png'
import { Link } from 'react-router-dom';

const DashNav = () => {
  return (
    <Nav>
     <Link to='/'>
      <Axon src={Logo} alt="logo" />
     </Link>
     <section>
      <form action="#">
       <input type="text" />
      </form>
      <StyledIcon />
      <Icon src={woman} alt="icon" />
     </section>
     </Nav>
  )
}
export default DashNav