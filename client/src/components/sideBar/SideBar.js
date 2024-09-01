import React from "react";
import { Wrapper,Span,Paragraph} from "./styleSideBar";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TfiDashboard } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const SideBar = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
       <Paragraph to='/axonlink/public-dash'>
        <TfiDashboard />
        <Span>Public Dash.</Span>
      </Paragraph>
      <Paragraph to='/axonlink/private-dash'>
       <MdOutlineDashboardCustomize />
       <Span>Private Dash.</Span>
      </Paragraph>
      <Paragraph>
       <IoSettingsOutline />
      </Paragraph>
      <Paragraph>
       <CiLogout />
      </Paragraph>
     
    </Wrapper>
  );
};

export default SideBar;
