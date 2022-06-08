import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  fadeIn,
  Border,
  pageAnimation,
  BorderTop,
  Open,
  Close,
} from "../animations";
const MobilePopup = ({ description, title, sub }) => {
  const [element, controls] = useScroll();
  return (
    <StyledPopupContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <StyledPopupGrid variants={fadeIn}>
        <StyledPopupContent variants={fadeIn}>
          <h3>{title}</h3>
        </StyledPopupContent>
        <StyledPopupContent variants={fadeIn}>
          <b>
            <i>{sub}</i>
          </b>
        </StyledPopupContent>
        <StyledPopupContent variants={fadeIn}>
          <p>{description}</p>
        </StyledPopupContent>
      </StyledPopupGrid>
    </StyledPopupContainer>
  );
};

const StyledPopupContainer = styled(motion.div)`
  /* margin: 2rem; */
  height: 60vh;
  width: 90vw;
  position: absolute;
  top: 20vh;
  left: 5vw;
  background-color: gainsboro;
  color: black;
  z-index: 100;
  box-shadow: 10px 10px 5px #0d0d0d;
  h3,
  b,
  i,
  p {
    color: black !important;
    text-shadow: none !important;
  }
`;

const StyledPopupGrid = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  padding: 2rem;
  h3,
  b,
  i,
  p {
    color: black !important;
    text-shadow: none !important;
  }
`;

const StyledPopupContent = styled(motion.div)`
  align-self: start;
  justify-self: start;

  h3,
  b,
  i,
  p {
    color: black !important;
    text-shadow: none !important;
  }
`;

const StyledPopupContainerContact = styled(motion.div)`
  /* margin: 2rem; */
  height: 60vh;
  width: 90vw;
  position: absolute;
  top: 20vh;
  left: 5vw;
  background-color: gainsboro;
  color: black;
  z-index: 100;
  box-shadow: 10px 10px 5px #0d0d0d;
`;

const StyledPopupGridContact = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  padding: 2rem;
`;

const StyledPopupContentContact = styled(motion.div)`
  align-self: start;
  justify-self: start;

  h3,
  i,
  p {
    color: black !important;
    text-shadow: 0px 0px black !important;
  }
`;

export default MobilePopup;
