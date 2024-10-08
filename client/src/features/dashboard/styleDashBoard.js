import styled from "styled-components";

export const DashLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: ${({ isSidebarOpen }) => (isSidebarOpen ? '12%' : '0')}; /* Adjust padding to match sidebar width */
  transition: padding-left 0.3s ease;

  .top-sections {
    display: flex;
    width: 100%;
    gap: 5px; /* Space between sections 1 and 2 */
    margin-top: 3px; /* Space below the toggle button */
  }

  section {
    flex: 1;
    // border: 1px solid; /* Add a border to visualize sections */
  }

  section:nth-child(3) {
    margin-top: 5px; /* Space above section 3 */
  }
`

export const Sidebutton = styled.button`
  margin: 5px 0 3px 1px;
  width: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
& : hover {
background-color:#94B1B3
}
`