import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//image
import DeveloperImg from "../Images/development.png";
//animations
import { SlideInFromRight, fadeIn, pageAnimation } from "../animations";
import { useScroll } from "../components/useScroll";
//Media Query Sizes
import { size, device } from "../sizes";

const Landing = () => {
  const [element, controls] = useScroll();
  return (
    <StyledImageGrid
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <StyledImageContainer>
        <motion.img
          src={DeveloperImg}
          alt="WebDevelopment"
          variants={SlideInFromRight}
        />
      </StyledImageContainer>
      <StyledTextGrid>
        <StyledTitle>
          <motion.h1 variants={fadeIn}>Web</motion.h1>
          <motion.h1 variants={fadeIn}>Developer</motion.h1>
        </StyledTitle>
        <StyledDescription>
          {/* <motion.h3 variants={fadeIn}>
            Welcome to my website. My name is Kyle and I turn coffee into
            software :]
          </motion.h3> */}
        </StyledDescription>
      </StyledTextGrid>
    </StyledImageGrid>
  );
};
const StyledImageGrid = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  justify-items: center;
  z-index: 1;
  overflow: hidden;

  @media (min-width: 1201px) {
    //fine
  }
  @media (max-width: 1200px) {
    //fine
  }
  @media (max-width: 1024px) {
    //Breaks
  }
  @media (max-width: 768px) {
    padding-top: 5rem;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 365px) {
  }
`;
const StyledImageContainer = styled(motion.div)`
  grid-row: 1/3;
  grid-column: 2/3;
  min-height: 10vh;
  min-width: 15vw;
  img {
    max-width: 100%;
    max-height: 100%;
    /* height: 25rem; */
    object-fit: cover;
  }
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
    //break
    grid-row: 1/3;
    grid-column: 2/3;
    height: 40vh;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    grid-row: 1/3;
    grid-column: 1/3;
    img {
      height: 60vh;
    }
  }
  @media (max-width: 480px) {
  }
`;
const StyledTextGrid = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 1/3;
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 2fr 1fr;
  padding: 0 2rem 0 2rem;
  z-index: 3;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
    grid-row: 1/3;
    grid-column: 1/3;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
const StyledTitle = styled(motion.div)`
  grid-row: 1/3;
  align-self: center;
  justify-self: start;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1025px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 768px) {
    padding-top: 10vh;
    grid-row: 1/2;
    grid-column: 1/3;
    align-self: start;
    justify-self: start;
    h1 {
      font-size: 4rem;
    }
    padding-left: 5vw;
  }
  @media (max-width: 545px) {
    padding-left: 2vw;
  }
  @media (max-width: 380px) {
    h1 {
      font-size: 3.3rem;
    }
  }
  @media (max-width: 365px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 280px) {
    h1 {
      font-size: 2.5rem;
      padding-left: 0vw;
    }
  }
`;
const StyledDescription = styled(motion.div)`
  grid-row: 2/3;
  align-self: start;
  justify-self: start;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-row: 2/3;
    align-self: start;
    justify-self: start;
    padding-top: 3rem;
  }
  @media (max-width: 480px) {
  }
`;
export default Landing;
