import React from "react";

export const Tabs = ({ children, buttons, ButtonsContainer }) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
