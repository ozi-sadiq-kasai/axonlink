import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-12%')}; /* Adjust based on sidebar width */
  width: 12%; /* Full width of the sidebar */
  height: 100%; /* Full height of the viewport */
  transition: left 0.3s ease;
  background-color:#94B1B3;
  padding-top:20px;
  z-index: 1000; /* Ensure the sidebar stays on top */
  display: flex;
  gap:15px;
  flex-direction: column;
  // padding: 20px; /* Add some padding for content */
  // box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Add shadow for better separation */
`;

export const Span = styled.span`
margin-left:5px;
`
export const Paragraph =styled(Link)`
padding: 0 5px;
cursor:pointer;
text-align:center;
color:white
`