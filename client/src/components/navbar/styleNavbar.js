import styled from "styled-components";
import {Link} from 'react-router-dom'



export const Navbar = styled.div`
width:100vw;
display:flex;
align-items:center;
padding:5px;
justify-content:space-between;
position:fixed;
top: 0;
z-index: 1000;
background-color: ${(props) => (props.scrolled ? 'transparent' : 'transparent')};
`
export const Image = styled.img`
width:10%;
`

export const NavElement = styled.div`
display:flex;
width:50%;
justify-content:space-around;

`

export const StyledLink = styled(Link)`
  text-decoration: none;
 color: #E4FCBA; /* Inherits the text color from the parent */

  &:hover {
    color: blue;
  }
`;