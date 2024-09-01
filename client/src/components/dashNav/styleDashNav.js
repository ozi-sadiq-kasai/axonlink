import styled from "styled-components";
import { IoIosNotificationsOutline } from "react-icons/io";

export const Nav = styled.nav`
background-color:#94B1B3;
display:flex;
justify-content:space-between;
align-items:center;
padding:5px 10px;

section{
display:flex;
flex:2;
max-width:70%;
justify-content:space-around;
align-items:center
},

input:focus {
 outline: none;
 padding-left:2px;
}`

export const Axon = styled.img`
width:100px;
`
export const Icon = styled.img`
width:30px
`
export const StyledIcon = styled(IoIosNotificationsOutline)`
  width: 25px;
  height: auto;
  color: white;
`;