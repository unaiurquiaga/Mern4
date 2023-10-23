import React, { useState } from 'react';
import styled from 'styled-components';
import Assistant from '../assets/Assistant.png';
import VirtualAssistant from './VirtualAssistant';

const ContactButton = () => {
  const [toggleAssistant, setToggleAssistant] = useState(false);

  const FloatingButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
  `;

  const handleAssistantClick = () => {
    setToggleAssistant(!toggleAssistant);
  };

  return (
    <>
      <FloatingButtonContainer onClick={handleAssistantClick}>
        <img src={Assistant} alt="Assistant" />
      </FloatingButtonContainer>
      <VirtualAssistant isVisible={toggleAssistant} />
    </>
  );
};

export default ContactButton;