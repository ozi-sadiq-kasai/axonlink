import { Nav,Axon,Icon,StyledIcon } from "./styleDashNav"
import Logo from '../../assets/Logo.png'
import woman from '../../assets/woman.png'

const DashNav = () => {
  return (
    <Nav>
      <Axon src={Logo} alt="logo" />
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