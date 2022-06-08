import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import LagoonNebulu from "../Images/spacebg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  fadeIn,
  Border,
  pageAnimation,
  BorderTop,
  Open,
  Close,
} from "../animations";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { useScroll } from "../components/useScroll";
import Button from "@material-ui/core/Button";
import MobilePopup from "./MobilePopup";
import MobileContactPopup from "./MobileContactPopup";
const MobileResume = () => {
  const size = useWindowSize();
  const [element, controls] = useScroll();

  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);

  return (
    <>
      {popup1 || popup2 || popup3 ? (
        <StyledClickableBG
          onClick={() => {
            setPopup1(false);
            setPopup2(false);
            setPopup3(false);
            console.log("POP : " + popup1, popup2, popup3);
          }}
        ></StyledClickableBG>
      ) : (
        ""
      )}
      <StyledMobileContainer
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <StyledCard variants={fadeIn}>
          <StyledCardHeader variants={fadeIn}>
            <h2>Resumé Objective</h2>
          </StyledCardHeader>
          <StyledCardBody variants={fadeIn}>
            <p>
              I am a Web Developer with 2+ years of experience in programming
              applications from the ground up. This includes designing,
              developing and testing user interfaces and database schemas.
            </p>
          </StyledCardBody>
        </StyledCard>

        <StyledCard>
          <StyledCardHeader variants={fadeIn}>
            <h2>Experience</h2>
          </StyledCardHeader>
        </StyledCard>

        <StyledCard>
          <StyledCardHeader variants={fadeIn}>
            <h3>Web Developer</h3>
          </StyledCardHeader>
          {size.width ? (
            size.width >= 350 ? (
              <StyledCardBody variants={fadeIn}>
                <i>
                  Aspect Retail Logistics, Pickering, ON / August 2020 -
                  December 2020
                </i>
              </StyledCardBody>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          <StyledCardBody2 variants={fadeIn}>
            {popup1 ? (
              <MobilePopup
                description={
                  "•	While working here I taught myself a lot of C# and VB within my first week of employment.  My first project was revamping an existing scheduling program which I finished ahead of schedule.  For this program, I gave it a more modern look, as well I added multiple pieces of new functionality.  Another project I completed was an automated security program.  This program allowed contractors and visitors to sign themselves into the building which eliminated 90% of the work which security had to do previously."
                }
                title={"Web Developer"}
                sub={
                  "Aspect Retail Logistics, Pickering, ON / August 2020 - December 2020"
                }
              />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPopup1(!popup1)}
                variants={fadeIn}
              >
                Read more
              </Button>
            )}
          </StyledCardBody2>
        </StyledCard>

        <StyledCard variants={fadeIn}>
          <StyledCardHeader variants={fadeIn}>
            <h3>Web Developer</h3>
          </StyledCardHeader>
          {size.width ? (
            size.width >= 350 ? (
              <StyledCardBody variants={fadeIn}>
                <i>Loblaws INC, Ajax, ON / December 2020 - June 2021</i>
              </StyledCardBody>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          <StyledCardBody2 variants={fadeIn}>
            {popup2 ? (
              <MobilePopup
                description={
                  "I created and maintained schedules vbs scripts, C# and VB web pages, as well as SQL tables and stored procedures.  On a daily basis I would work on multiple projects as well as respond to and resolve support emails.  I taught myself how to use Angular to create a dashboard tool for operations managers to quickly leverage large amounts of data.  For this I used Angular Material to create a modern UI and smooth UX.  The data used for this application was pulled from an API."
                }
                title={"Web Developer"}
                sub={"Loblaws INC, Ajax, ON / December 2020 - June 2021"}
              />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPopup2(!popup2)}
                variants={fadeIn}
              >
                Read more
              </Button>
            )}
          </StyledCardBody2>
        </StyledCard>
        <StyledCard variants={fadeIn}>
          <StyledCardHeader variants={fadeIn}>
            <h2>Contact, Skills & Education</h2>
          </StyledCardHeader>
          <StyledCardBody variants={fadeIn}>
            {popup3 ? (
              <MobileContactPopup />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPopup3(!popup3)}
                variants={fadeIn}
              >
                Read more
              </Button>
            )}
          </StyledCardBody>
        </StyledCard>
      </StyledMobileContainer>
    </>
  );
};

const StyledMobileContainer = styled(motion.div)`
  padding: 1rem 2rem 2rem 2rem !important;
  grid-row: 2/4 !important;
  grid-column: 1/4 !important;
  height: 100% !important;
  width: 100% !important;
  display: grid !important;
  grid-template-rows: auto !important;
  grid-template-columns: 1fr !important;
  h2 {
    font-size: 1.5rem !important;
  }
  p {
    font-size: 0.9rem !important;
  }
  h3 {
    font-size: 1.2rem !important;
  }
  i {
    font-size: 0.8rem !important;
  }
  h2,
  p,
  h3,
  i {
    text-shadow: 1px 1px black !important;
  }
  color: white !important;

  @media (max-width: 321px) {
    h2 {
      font-size: 1.3rem !important;
    }
    p {
      font-size: 0.7rem !important;
    }
    h3 {
      font-size: 1.05rem !important;
    }
    i {
      font-size: 0.7rem !important;
    }
  }
`;

const StyledCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  overflow: hidden;
`;

const StyledCardHeader = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
  overflow: hidden;
`;

const StyledCardBody = styled(motion.div)`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
  overflow: hidden;
`;

const StyledCardBody2 = styled(motion.div)`
  grid-row: 3/4;
  align-self: center;
  justify-self: start;
  overflow: hidden;
  h3,
  b,
  i,
  p {
    color: black !important;
    text-shadow: none !important;
  }
`;

const StyledClickableBG = styled(motion.div)`
  position: absolute;
  display: grid;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: gainsboro;
  opacity: 0.2;
  /* pointer-events: none; */
`;

export default MobileResume;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
