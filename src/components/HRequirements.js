import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//img
import Outlet from "../Images/plug.png";
import Wifi from "../Images/wifi.png";
//components
import Button from "@material-ui/core/Button";
//anim
import { useScroll } from "../components/useScroll";
import {
  SlideInFromRight,
  fadeIn,
  pageAnimation,
  SlideInFromLeft,
} from "../animations";

const HRequirements = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <StyledMain
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <StyledTitle variants={fadeIn}>
          <h2>Requirements</h2>
        </StyledTitle>
        <StyledOutletImg variants={SlideInFromRight}>
          <img src={Outlet} alt="Outlet" />
        </StyledOutletImg>
        <StyledReq1>
          <motion.h3 variants={fadeIn}>One Outlet Port</motion.h3>
          <br />
          <motion.p variants={fadeIn}>
            One outlet port is required to be in use by the helium miner at all
            times. However, the helium miners only require 5W of electricity.
            The cost of running one miner 24/7/365 at $0.12/KWh is approximatly
            $5.26.
          </motion.p>
        </StyledReq1>
        <StyledWifiImg variants={SlideInFromLeft}>
          <img src={Wifi} alt="Wifi" />
        </StyledWifiImg>
        <StyledReq2>
          <motion.h3 variants={fadeIn}>Wifi Connection</motion.h3>
          <br />
          <motion.p variants={fadeIn}>
            A wifi connection is required for the miner to function. The miners
            use approximatly 30gb/mo. As a comparison, the average Netlix user
            consumes 20-60gb/mo.
          </motion.p>
        </StyledReq2>
        <StyledButton variants={fadeIn}>
          <a href="#AboutHelium">
            <Button
              variant="contained"
              // style={{ backgroundColor: "White", color: "Black" }}
              color="primary"
            >
              Well, what does this "miner" do?
            </Button>
          </a>
        </StyledButton>
      </StyledMain>
    </>
  );
};

const StyledMain = styled(motion.div)`
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0rem 2rem 0rem 2rem;
  row-gap: 1rem;
  z-index: 1;

  h2 {
    font-size: 6rem !important;
  }
  h3 {
    font-size: 3rem !important;
  }
  p {
    font-size: 1.5rem !important;
  }
  span {
    font-size: 1.8rem !important;
  }
  @media (min-width: 1023px) {
    h2 {
      font-size: 8rem !important;
    }
    h3 {
      font-size: 4rem !important;
    }
    p {
      font-size: 2rem !important;
    }
    span {
      font-size: 2.2rem !important;
    }
  }
  @media (max-width: 801px) {
    h2 {
      font-size: 6rem !important;
    }
    h3 {
      font-size: 2.5rem !important;
    }
    p {
      font-size: 1.5rem !important;
    }
    span {
      font-size: 1.8rem !important;
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 5.5rem !important;
    }
    h3 {
      font-size: 2.5rem !important;
    }
    p {
      font-size: 1.2rem !important;
    }
    span {
      font-size: 1.4rem !important;
    }
  }
  @media (max-width: 601px) {
    h2 {
      font-size: 4.5rem !important;
    }
    h3 {
      font-size: 2rem !important;
    }
    p {
      font-size: 1rem !important;
    }
    span {
      font-size: 1.2rem !important;
    }
  }
  @media (max-width: 541px) {
    h2 {
      font-size: 4rem !important;
    }
    h3 {
      font-size: 2rem !important;
    }
    p {
      font-size: 1rem !important;
    }
    span {
      font-size: 1.1rem !important;
    }
  }
  @media (max-width: 481px) {
    h2 {
      font-size: 3.5rem !important;
    }
    h3 {
      font-size: 1.5rem !important;
    }
    p {
      font-size: 1rem !important;
    }
    span {
      font-size: 1.1rem !important;
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 3.15rem !important;
    }
    h3 {
      font-size: 1.45rem !important;
    }
    p {
      font-size: 0.85rem !important;
    }
    span {
      font-size: 0.95rem !important;
    }
  }
  @media (max-width: 413px) {
    h2 {
      font-size: 3.1rem !important;
    }
    h3 {
      font-size: 1.5rem !important;
    }
    p {
      font-size: 0.9rem !important;
    }
    span {
      font-size: 1rem !important;
    }
  }
  @media (max-width: 385px) {
    h2 {
      font-size: 3rem !important;
    }
    h3 {
      font-size: 1.4rem !important;
    }
    p {
      font-size: 0.8rem !important;
    }
    span {
      font-size: 0.9rem !important;
    }
  }
  @media (max-width: 376px) {
    h2 {
      font-size: 2.75rem !important;
    }
    h3 {
      font-size: 1.3rem !important;
    }
    p {
      font-size: 0.7rem !important;
    }
    span {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width: 361px) {
    h2 {
      font-size: 2.5rem !important;
    }
    h3 {
      font-size: 1.2rem !important;
    }
    p {
      font-size: 0.8rem !important;
    }
    span {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width: 321px) {
    h2 {
      font-size: 2.2rem !important;
    }
    h3 {
      font-size: 1rem !important;
    }
    p {
      font-size: 0.6rem !important;
    }
    span {
      font-size: 0.7rem !important;
    }
  }
  @media (max-width: 281px) {
    h2 {
      font-size: 1.8rem !important;
    }
    h3 {
      font-size: 1rem !important;
    }
    p {
      font-size: 0.6rem !important;
    }
    span {
      font-size: 0.5rem !important;
    }
  }
  @media (max-width: 240px) {
    h2 {
      font-size: 1.5rem !important;
    }
    h3 {
      font-size: 0.75rem !important;
    }
    p {
      font-size: 0.4rem !important;
    }
    span {
      font-size: 0.4rem !important;
    }
  }
`;

const StyledTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
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

const StyledOutletImg = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  img {
    height: 20vh;
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
const StyledReq1 = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
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

const StyledWifiImg = styled(motion.div)`
  grid-row: 3/4;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  img {
    height: 20vh;
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

const StyledReq2 = styled(motion.div)`
  grid-row: 3/4;
  grid-column: 2/3;
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

const StyledButton = styled(motion.div)`
  grid-row: 4/5;
  grid-column: 1/3;
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
export default HRequirements;
