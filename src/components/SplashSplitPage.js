import React, { useState } from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

import {
  SplashAnimation,
  SplashLeave,
  SplashSplitEnter,
  SplashRight,
  SplashLeft,
  blackToWhite,
} from "../animations";

import { useScroll } from "./useScroll";
import { applyMiddleware } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { changeAnimationState } from "../actions/animationActions";

const SplashSplitPage = () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state.state);
  //   const [element, controls] = useScroll();
  return (
    <>
      <StyledContainer
        exit="exit"
        variants={SplashSplitEnter}
        initial="hidden"
        animate="show"
      >
        <StyledBoxLeft variants={SplashLeft} />
        <StyledBoxRight variants={SplashRight} />
        <StyledBox>
          <StyledText>
            <motion.h1
              variants={blackToWhite}
              onAnimationComplete={() => dispatch(changeAnimationState(false))}
            >
              KB
            </motion.h1>
          </StyledText>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  /* background-color: #0d0d0d; */
  z-index: 20;
  /* overflow: hidden; */
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  /* position: absolute; */
`;

const StyledBoxLeft = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const StyledBoxRight = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const StyledBox = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  align-self: center;
  justify-self: center;
  padding: 10rem;
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

export default SplashSplitPage;
