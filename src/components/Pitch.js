import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MinersImg from "../Images/miners.png";
import Button from "@material-ui/core/Button";
//animations
import useScroll from "./useScroll";
import { SlideInFromRight, fadeIn, pageAnimation } from "../animations";

const Pitch = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <StyledPitchContainer
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <StyledTitle variants={fadeIn}>
          {/* <h2> */}
          <span style={{ color: "white" }}>Earn </span>
          <span style={{ color: "green" }}>$100/mo</span>
          <span style={{ color: "white" }}> in </span>{" "}
          <span style={{ color: "gold" }}>Passive Income</span>
          {/* </h2> */}
        </StyledTitle>
        {/* <StyledTitle2 variants={fadeIn}>
          <h2>
            
          </h2>
        </StyledTitle2> */}
        <StyledImgContainer variants={SlideInFromRight}>
          <img src={MinersImg} alt="Miners" />
        </StyledImgContainer>
        <StyledMoreInfo variants={fadeIn}>
          <a href="#Requirements">
            <Button
              color="primary"
              variant="contained"
              //  s tyle={{ backgroundColor: "White", color: "Black" }}
            >
              Well, what's the catch?
            </Button>
          </a>
        </StyledMoreInfo>
      </StyledPitchContainer>
    </>
  );
};

const StyledPitchContainer = styled(motion.div)`
  padding: 2rem;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow: hidden;

  span {
    font-size: 2rem;
  }

  @media (min-width: 1023px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 3rem;
      text-align: center;
    }
  }
  @media (max-width: 801px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 2rem;
      text-align: center;
    }
  }
  @media (max-width: 601px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  @media (max-width: 481px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 1.3rem;
      text-align: center;
    }
  }
  @media (max-width: 413px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 1.2rem;
      text-align: center;
    }
  }
  @media (max-width: 385px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 1.2rem;
      text-align: center;
    }
  }
  @media (max-width: 361px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 1rem;
      text-align: center;
    }
  }
  @media (max-width: 321px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 0.9rem;
      text-align: center;
    }
  }
  @media (max-width: 281px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 0.7rem;
      text-align: center;
    }
  }
  @media (max-width: 240px) {
    /* h2 {
      font-size: 2rem;
      text-align: center;
    } */
    span {
      font-size: 0.6rem;
      text-align: center;
    }
  }
`;

const StyledTitle = styled(motion.div)`
  grid-row: 3/4;
  grid-column: 1/5;
  align-self: start;
  justify-self: center;
  z-index: 1;
  text-align: center;
  h2 {
    font-size: 4rem;
    text-shadow: 1px 1px black;
  }
  span {
    font-size: 4rem;
  }
  @media (min-width: 1023px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 7rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 801px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 6.5rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 769px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 5.5rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 601px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 4.5rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 541px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 3.8rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 481px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 3.5rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 415px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 3.25rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 413px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 3rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 385px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 3rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 376px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 2.8rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 361px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 2.5rem !important;
      text-align: center !important;
    }
  }
  @media (max-width: 321px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 2.2rem !important;
      text-align: center !important;
    }
  }

  @media (max-width: 240px) {
    /* h2 {
      font-size: 2rem !important;
      text-align: center !important;
    } */
    span {
      font-size: 1rem !important;
      text-align: center !important;
    }
  }
`;
const StyledTitle2 = styled(motion.div)`
  grid-row: 3/4;
  grid-column: 1/5;
  align-self: end;
  justify-self: center;
  z-index: 1;
  h2 {
    font-size: 4rem;
    text-shadow: 1px 1px black;
  }
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }
    align-self: center;
    justify-self: start;
  }
  @media (max-width: 480px) {
  }
`;
const StyledImgContainer = styled(motion.div)`
  position: absolute;
  top: 20vh;
  left: 10vw;
  /* width: 80vw;
  height: 60vw; */
  /* grid-row: 2/3;
  grid-column: 1/5;
  align-self: center;
  justify-self: center;
  z-index: 0;
  overflow: hidden; */
  img {
    width: 80vw;
    height: 100%;
    /* height: 25%; */
    object-fit: contain;
  }
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
const StyledMoreInfo = styled(motion.div)`
  grid-row: 4/5;
  grid-column: 1/5;
  align-self: center;
  justify-self: center;
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

export default Pitch;
