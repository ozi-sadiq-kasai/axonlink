import globe from '../../assets/globe.jpg'
import checkup from '../../assets/checkup.jpg'
import laptop from '../../assets/laptop.jpg'
import response from '../../assets/response.jpg'
import NavbarHome from '../../components/navbar/NavbarHome' 

import { Image, HomeLayout, Paragraph, Header, List, Logo, LogoSpan,HomeAddress,} from './styleHome';

const Home = () => {
  return (
    <main>
     <NavbarHome />
      <Image src={globe} alt="globe" />
      <HomeLayout>
       <Header>
        Research Management in Real Time.
       </Header>
       <Logo>
        Data for Everyone...
       </Logo>
       <LogoSpan>Anywhere... Anytime...</LogoSpan>
       <Paragraph>
        Axonlink Limited is a global clinical research management system that offers research professionals rapid access to real-time data.<br/> This facilitates efficient study management and participant recruitment from start to finish. By enhancing collaboration and research methods, Axonlink significantly improves patient care and treatment outcomes.
       </Paragraph>
       <List>
        <li>
         <img src={checkup} alt="checkup" />
         <h2>BENEFITING PATIENTS</h2>
         <p>
          8+ million participants are being managed within the system
          </p>
        </li>
     
        <li>
         <img src={laptop} alt="checkup" />
        
         <h2>BETTER RESEARCH</h2>
         <p>
          Improving research management by advancing patient care
          </p>
        </li>
     
        <li>
         <img src={response} alt="checkup" />
      
         <h2>SUPPORTING OUR USERS</h2>
         <p>
          Fast response time to emails and support queries.
          </p>
        </li>
       </List>
      </HomeLayout>
     <HomeAddress>
      <address>
     <span> contact us at: </span>
       <a href="mailto:axonlinklimited@gmail.com">AxonLink Limited</a>
      </address>
     </HomeAddress>
      
    </main>
  )
}
export default Home