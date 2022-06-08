import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  faPlay,
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fadeIn,
  Border,
  pageAnimation,
  BorderTop,
  Open,
  Close,
} from "../animations";

const MobileContactPopup = () => {
  const [element, controls] = useScroll();
  return (
    <StyledPopupContainerContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <StyledPopupGridContact variants={fadeIn}>
        <StyledPopupContentContact variants={fadeIn}>
          <h3>Contact Info</h3>
        </StyledPopupContentContact>
        {/* <StyledPopupContentContactGrid> */}
        <motion.div variants={fadeIn}>
          <FontAwesomeIcon className="envelope" icon={faEnvelope} />
          <span>{"  "}</span>
          <font>KyleBayerBusiness@gmail.com</font>
        </motion.div>

        {/* <motion.div variants={fadeIn}>
          <FontAwesomeIcon className="phone" icon={faMobileAlt} />
          <span>{"  "}</span>
          <font>289-987-4118</font>
        </motion.div> */}

        <motion.div variants={fadeIn}>
          <FontAwesomeIcon className="location" icon={faMapMarkerAlt} />
          <span>{"  "}</span>
          <font>ON, Canada</font>
        </motion.div>

        <StyledPopupContentContact variants={fadeIn}>
          <h3>Skills</h3>
        </StyledPopupContentContact>
        <motion.div variants={fadeIn}>
          <span>{"  "}</span>
          <font>
            PHP, VB, VBS, C#, ASP.NET, SQL, Oracle, JavaScript, Angular, React,
            Redux, Ajax, HTML, CSS, SCSS, Java
          </font>
        </motion.div>

        <StyledPopupContentContact variants={fadeIn}>
          <h3>Education</h3>
        </StyledPopupContentContact>
        <motion.div variants={fadeIn}>
          <span>{"  "}</span>
          <font>
            Computer Programmer Analyst, Duraham College, Oshawa, ON / 2020
          </font>
        </motion.div>
      </StyledPopupGridContact>
    </StyledPopupContainerContact>
  );
};

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
  * {
    font-size: 1.5rem;
    text-shadow: 0px 0px black !important;
    font {
      font-size: 0.9rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const StyledPopupGridContact = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  padding: 2rem;
  h3,
  i,
  p {
    text-shadow: none !important;
  }
`;

const StyledPopupContentContact = styled(motion.div)`
  align-self: start;
  justify-self: start;

  h3,
  i,
  p {
    color: black !important;
    text-shadow: none !important;
  }
`;

const StyledPopupContentContactGrid = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  align-items: start;
  justify-items: start;
  text-shadow: none !important;
  h3,
  i,
  p {
    color: black !important;
    text-shadow: none !important;
  }
`;

export default MobileContactPopup;
