import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import ProjectCard from "../components/ProjectCard";
//animations
import {
  SlideInFromRight,
  pageAnimation,
  fadeIn,
  exProjPageAnimation,
} from "../animations";
import { useScroll } from "../components/useScroll";
//img
import MusicImg from "../Images/musicbg.png";
import PhotoImg from "../Images/photo.png";
import GamerImg from "../Images/gamer.jpg";
import MovieImg from "../Images/movie.jpg";
import Rust from "../Images/rust.jpg";
import yw from "../Images/9.png";
import vg from "../Images/pvg.jpg";
import crypto from "../Images/crypto.jpg";
const ExampleProjects = () => {
  const [element, controls] = useScroll();
  return (
    <StyledContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <StyledTitle variants={fadeIn}>
        <h1>Example Projects</h1>
      </StyledTitle>
      <StyledContentBG variants={exProjPageAnimation}>
        <StyledProj1 variants={SlideInFromRight} whileHover={{ scale: 1.05 }}>
          <a href="http://musicplayer.kylebayer.com" target="_blank">
            <ProjectCard title={"Music Player"} img={MusicImg}></ProjectCard>
          </a>
        </StyledProj1>
        <StyledProj2 variants={SlideInFromRight} whileHover={{ scale: 1.05 }}>
          <a href="http://capture.kylebayer.com" target="_blank">
            <ProjectCard title={"Capture"} img={PhotoImg}></ProjectCard>
          </a>
        </StyledProj2>
        <StyledProj3 variants={SlideInFromRight} whileHover={{ scale: 1.05 }}>
          <a href="http://ignite.kylebayer.com" target="_blank">
            <ProjectCard title={"Ignite"} img={vg}></ProjectCard>
          </a>
        </StyledProj3>
        <StyledProj4 variants={SlideInFromRight} whileHover={{ scale: 1.05 }}>
          <a href="http://contentcrazy.kylebayer.com" target="_blank">
            <ProjectCard title={"Content Crazy"} img={MovieImg}></ProjectCard>
          </a>
        </StyledProj4>
        <StyledProj5 variants={SlideInFromRight} whileHover={{ scale: 1.05 }}>
          <a href="http://rustyinfo.kylebayer.com" target="_blank">
            <ProjectCard title={"RustyInfo"} img={Rust}></ProjectCard>
          </a>
        </StyledProj5>
        <StyledProj6 variants={SlideInFromRight} whileHover={{ scale: 1.05 }}>
          <a href="http://yieldwhales.com" target="_blank">
            <ProjectCard title={"Yield Whales"} img={crypto}></ProjectCard>
          </a>
        </StyledProj6>
      </StyledContentBG>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  width: 100vw;
  height: 90vh;
  padding: 0 2rem 2rem 2rem;
  display: grid;
  grid-template-rows: 1fr 6fr;
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
const StyledTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
  padding-bottom: 1rem;
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 3.3rem;
    }
  }
  @media (max-width: 801px) {
    h1 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 601px) {
    h1 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 545px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 427px) {
    h1 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 415px) {
    h1 {
      font-size: 2.1rem;
    }
  }
  @media (max-width: 385px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 380px) {
    h1 {
      font-size: 1.9rem;
    }
  }
  @media (max-width: 370px) {
    h1 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 361px) {
    h1 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 355px) {
    h1 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 349px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 325px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`;
const StyledContentBG = styled(motion.div)`
  max-height: 100%;
  max-width: 100%;
  grid-row: 2/3;
  background-color: white;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 1rem;
  overflow: hidden;
  /* padding-bottom: 1%; */
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  @media (max-width: 480px) {
  }
`;
const StyledProj1 = styled(motion.div)`
  max-height: 100%;
  max-width: 100%;
  /* grid-row: 1/2;
  grid-column: 1/2; */
  padding: 1rem;
  /* position: relative; */
  overflow: hidden;
  /* align-self: center;
  justify-self: center; */
  display: grid;
  align-content: center;
  justify-content: center;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    /* grid-row: 1/2;
    grid-column: 1/2; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* grid-row: 1/2;
    grid-column: 1/2; */
  }
  @media (max-width: 480px) {
  }
`;
const StyledProj2 = styled(motion.div)`
  /* grid-row: 1/2;
  grid-column: 2/3; */
  max-height: 100%;
  max-width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  justify-content: center;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    /* grid-row: 1/2;
    grid-column: 2/3; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* grid-row: 2/3;
    grid-column: 1/2; */
  }
  @media (max-width: 480px) {
  }
`;
const StyledProj3 = styled(motion.div)`
  /* grid-row: 1/2;
  grid-column: 3/4; */
  max-height: 100%;
  max-width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  justify-content: center;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    /* grid-row: 2/3;
    grid-column: 1/2; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* grid-row: 3/4;
    grid-column: 1/2; */
  }
`;
const StyledProj4 = styled(motion.div)`
  /* grid-row: 2/3;
  grid-column: 1/2; */
  max-height: 100%;
  max-width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  justify-content: center;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    /* grid-row: 2/3;
    grid-column: 2/3; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* grid-row: 4/5;
    grid-column: 1/2; */
  }
  @media (max-width: 480px) {
  }
`;

const StyledProj5 = styled(motion.div)`
  /* grid-row: 2/3;
  grid-column: 2/3; */
  max-height: 100%;
  max-width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  justify-content: center;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    /* grid-row: 3/4;
    grid-column: 1/2; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* grid-row: 5/6;
    grid-column: 1/2; */
  }
  @media (max-width: 480px) {
  }
`;

const StyledProj6 = styled(motion.div)`
  /* grid-row: 2/3;
  grid-column: 2/3; */
  max-height: 100%;
  max-width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  justify-content: center;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    /* grid-row: 3/4;
    grid-column: 1/2; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    /* grid-row: 5/6;
    grid-column: 1/2; */
  }
  @media (max-width: 480px) {
  }
`;

export default ExampleProjects;
