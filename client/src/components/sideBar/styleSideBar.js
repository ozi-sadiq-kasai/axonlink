import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-12%')}; /* Adjust based on sidebar width */
  width: 12%; /* Full width of the sidebar */
  height: 100%; /* Full height of the viewport */
  transition: left 0.3s ease;
  background-color: gray;
  z-index: 1000; /* Ensure the sidebar stays on top */
  display: flex;
  flex-direction: column;
  // padding: 20px; /* Add some padding for content */
  // box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Add shadow for better separation */
`;
