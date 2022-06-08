import React, { useState } from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

import { SplashAnimation, SplashLeave } from "../animations";

import { useScroll } from "../components/useScroll";
import { applyMiddleware } from "redux";

const SplashPage = ({ anim }) => {
  //   const [element, controls] = useScroll();

  return (
    <>
      {anim ? (
        <>
          <StyledContainer
            exit="exit"
            variants={SplashLeave}
            initial="hidden"
            animate="show"
          >
            <StyledBox
              variants={SplashAnimation}
              //   ref={element}
            >
              <StyledText>
                <h1>KB</h1>
              </StyledText>
            </StyledBox>
          </StyledContainer>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const StyledContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #0d0d0d;
  z-index: 20;
  /* overflow: hidden; */
  display: grid;
  /* position: absolute; */
`;

const StyledBox = styled(motion.div)`
  width: 25vw;
  height: 25vh;
  background-color: white;
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
  display: grid;
`;

const StyledText = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
  h1 {
    color: #0d0d0d;
  }
`;

export default SplashPage;
