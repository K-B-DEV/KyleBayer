import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//img
import Hotspot from "../Images/hel.png";
import WorldMap from "../Images/map-world.png";
//anim
import useScroll from "./useScroll";
import { SlideInFromRight, fadeIn, pageAnimation } from "../animations";

const AboutHelium = ({ hotspots, cities, countries }) => {
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
          <h2>About Helium</h2>
        </StyledTitle>
        <StyledShortDescription>
          <motion.p variants={fadeIn}>
            Helium, also known as <i>The People's Network</i> is an
            international peer-to-peer wireless network comprised of helium
            hostpots (miners). This means that everyday people like you or I can
            participate in expanding this network accross Canada and the world.
            This network aims to replace large phone companies with a cheaper
            alternative. Essentially, companies which require cellular data for
            their various applications to operate can purchase network credits
            with HNT.
          </motion.p>
          <br />
          <motion.p variants={fadeIn}>
            HNT is the cryptocurrency created by Helium which is used to pay
            miners for creating and maintaining the network, as well as for
            companies to purchase data credits from Helium.
          </motion.p>
        </StyledShortDescription>
        <StyledHeliumNumbers variants={SlideInFromRight}>
          <StyledTotalHostpotsImg>
            <img src={Hotspot} alt="Hotspot" />
          </StyledTotalHostpotsImg>
          <StyledHotspots>
            <p>
              {hotspots
                ? hotspots.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })
                : ""}{" "}
              Active Hotspots
            </p>
          </StyledHotspots>
          <StyledWorldMapImg>
            <img src={WorldMap} alt="World Map" />
          </StyledWorldMapImg>
          <StyledCountries>
            <p>
              In{" "}
              {countries
                ? countries.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })
                : ""}{" "}
              Countries
            </p>
          </StyledCountries>
        </StyledHeliumNumbers>
      </StyledMain>
    </>
  );
};

const StyledMain = styled(motion.div)`
  height: 90vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  padding: 0 2rem 0 2rem;
  h2 {
    font-size: 6rem !important;
  }
  p {
    font-size: 1.5rem !important;
  }
  @media (min-width: 1023px) {
    h2 {
      font-size: 7rem !important;
    }
    p {
      font-size: 1.8rem !important;
    }
  }
  @media (max-width: 801px) {
    h2 {
      font-size: 6rem !important;
    }
    p {
      font-size: 1.5rem !important;
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 6rem !important;
    }
    p {
      font-size: 1.5rem !important;
    }
  }
  @media (max-width: 601px) {
    h2 {
      font-size: 3.9rem !important;
    }
    p {
      font-size: 1.25rem !important;
    }
  }
  @media (max-width: 541px) {
    h2 {
      font-size: 3.7rem !important;
    }
    p {
      font-size: 1rem !important;
    }
  }
  @media (max-width: 481px) {
    h2 {
      font-size: 3.5rem !important;
    }
    p {
      font-size: 1rem !important;
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 3rem !important;
    }
    p {
      font-size: 0.9rem !important;
    }
  }
  @media (max-width: 413px) {
    h2 {
      font-size: 2.9rem !important;
    }
    p {
      font-size: 0.85rem !important;
    }
  }
  @media (max-width: 385px) {
    h2 {
      font-size: 2.5rem !important;
    }
    p {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width: 376px) {
    h2 {
      font-size: 2.5rem !important;
    }
    p {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width: 361px) {
    h2 {
      font-size: 2.5rem !important;
    }
    p {
      font-size: 0.7rem !important;
    }
  }
  @media (max-width: 321px) {
    h2 {
      font-size: 2.2rem !important;
    }
    p {
      font-size: 0.6rem !important;
    }
  }
  @media (max-width: 281px) {
    h2 {
      font-size: 1.8rem !important;
    }
    p {
      font-size: 0.6rem !important;
    }
  }
  @media (max-width: 240px) {
    h2 {
      font-size: 1.5rem !important;
    }
    p {
      font-size: 0.35rem !important;
    }
  }
`;

const StyledTitle = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
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
  }
  @media (max-width: 480px) {
  }
`;

const StyledShortDescription = styled(motion.div)`
  grid-row: 2/3;
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

const StyledHeliumNumbers = styled(motion.div)`
  grid-row: 3/4;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
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

const StyledTotalHostpotsImg = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  img {
    height: 15vh;
  }
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    img {
      height: 10vh;
    }
  }
  @media (max-width: 480px) {
  }
`;

const StyledHotspots = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  align-self: start;
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

const StyledWorldMapImg = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  img {
    height: 15vh;
  }
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    img {
      height: 10vh;
    }
  }
  @media (max-width: 480px) {
  }
`;

const StyledCountries = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: start;
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
export default AboutHelium;
