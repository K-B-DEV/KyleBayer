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
import MobileResume from "./MobileResume";

const KnowledgeExperience = () => {
  const size = useWindowSize();
  const [element, controls] = useScroll();

  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);

  return (
    <>
      <StyledContainer
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <StyledImageHeader variants={fadeIn}>
          <img src={LagoonNebulu} alt="Lagoon Nebula" />
        </StyledImageHeader>
        <StyledTitle variants={fadeIn}>
          <h2>Resumé</h2>
        </StyledTitle>
        {size.width ? (
          size.width > 450 ? (
            <>
              <StyledResumeExperience>
                <StyledResumeObjective>
                  <motion.h3 variants={fadeIn}>Resumé Objective</motion.h3>
                  <br />
                  <motion.h4 variants={fadeIn}>
                    I am a Web Developer with 2+ years of experience in
                    programming applications from the ground up. This includes
                    designing, developing and testing user interfaces and
                    database schemas.
                  </motion.h4>
                </StyledResumeObjective>
                <StyledResumeWorkExperience>
                  <motion.h3 variants={fadeIn}>Experience</motion.h3>
                  <br />
                  <motion.h4 variants={fadeIn}>Web Developer</motion.h4>
                  <motion.i variants={fadeIn}>
                    Aspect Retail Logistics, Pickering, ON / August 2020 -
                    December 2020
                  </motion.i>
                  <motion.ul variants={fadeIn}>
                    <li>
                      While working here I taught myself a lot of C# and VB
                      within my first week of employment.
                    </li>
                    <li>
                      My first project was revamping an existing scheduling
                      program which I finished ahead of schedule. For this
                      program, I gave it a more modern look, as well I added
                      multiple pieces of new functionality.
                    </li>
                    <li>
                      Another project I completed was an automated security
                      program. This program allowed contractors and visitors to
                      sign themselves into the building which eliminated 90% of
                      the work which security had to do previously.
                    </li>
                  </motion.ul>
                  {/* </StyledResumeWorkExperience>
          <StyledResumeWorkExperience2> */}
                  <br />
                  <motion.h4 variants={fadeIn}>Web Developer</motion.h4>
                  <motion.i variants={fadeIn}>
                    Loblaws INC, Ajax, ON / December 2020 - June 2021
                  </motion.i>
                  <motion.ul variants={fadeIn}>
                    <li>
                      I created and maintained schedules vbs scripts, C# and VB
                      web pages, as well as SQL tables and stored procedures.
                    </li>
                    <li>
                      On a daily basis I would work on multiple projects as well
                      as respond to and resolve support emails.
                    </li>
                    <li>
                      I taught myself how to use Angular to create a dashboard
                      tool for operations managers to quickly leverage large
                      amounts of data. For this I used Angular Material to
                      create a modern UI and smooth UX. The data used for this
                      application was pulled from an API.
                    </li>
                  </motion.ul>
                </StyledResumeWorkExperience>
              </StyledResumeExperience>
              {size.width ? (
                <>
                  <StyledAboutGrid
                    variants={size.width > 768 ? Border : BorderTop}
                  >
                    <StyledContactInformation>
                      <div>
                        <motion.h3 variants={fadeIn}>Contact</motion.h3>
                      </div>
                      <motion.div variants={fadeIn}>
                        <FontAwesomeIcon
                          className="envelope"
                          icon={faEnvelope}
                        />
                        <span> </span>
                        KyleBayerBusiness@gmail.com
                      </motion.div>
                      {/* <motion.div variants={fadeIn}>
                        <FontAwesomeIcon className="phone" icon={faMobileAlt} />
                        <span> </span>
                        289-987-4118
                      </motion.div> */}
                      <motion.div variants={fadeIn}>
                        <FontAwesomeIcon
                          className="location"
                          icon={faMapMarkerAlt}
                        />
                        <span> </span>
                        Ajax, ON, Canada
                      </motion.div>
                    </StyledContactInformation>
                    <StyledSkills>
                      <motion.h3 variants={fadeIn}>Skills</motion.h3>
                      {size.width ? (
                        size.width > 768 ? (
                          <>
                            <motion.div variants={fadeIn}>
                              PHP, VB, VBS, C#, ASP.NET, SQL, Oracle,
                              JavaScript, Angular, React, Redux, Ajax, HTML,
                              CSS, SCSS, Java
                            </motion.div>
                          </>
                        ) : (
                          <motion.div
                            variants={fadeIn}
                            style={{ alignSelf: "start", justifySelf: "start" }}
                          >
                            PHP, VB, VBS, C#, ASP.NET, SQL, Oracle, JavaScript,
                            Angular, React, Redux, Ajax, HTML, CSS, SCSS, Java
                          </motion.div>
                        )
                      ) : (
                        ""
                      )}
                    </StyledSkills>
                    <StyledEducation>
                      <motion.h3 variants={fadeIn}>Education</motion.h3>
                      <br />
                      <motion.h4 variants={fadeIn}>
                        Computer Programmer Analyst
                      </motion.h4>
                      <motion.div variants={fadeIn}>
                        Duraham College, Oshawa, ON / 2020
                      </motion.div>
                    </StyledEducation>
                  </StyledAboutGrid>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <MobileResume />
            </>
          )
        ) : (
          ""
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled(motion.div)`
  width: 100vw;
  height: 90vh;
  background-color: #0d0d0d;
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 4fr 2fr;
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-template-rows: 1fr 3.5fr 1.5fr !important;
    grid-template-columns: 1fr 1fr 1fr !important;
    h3 {
      font-size: 1.4rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.9rem !important;
    }
  }
  @media (max-width: 750px) {
    grid-template-rows: 1fr 9fr 3fr !important;
    h3 {
      font-size: 1.5rem !important;
    }
    h4,
    div,
    span {
      font-size: 1rem !important;
    }
  }
  @media (max-width: 675px) {
    h3 {
      font-size: 1.45rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.95rem !important;
    }
  }
  @media (max-width: 575px) {
    h3 {
      font-size: 1.4rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.9rem !important;
    }
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 1.35rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.85rem !important;
    }
  }
  @media (max-width: 470px) {
    h3 {
      font-size: 1.3rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width: 400px) {
    h3 {
      font-size: 1.25rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.75rem !important;
    }
  }
  @media (max-width: 380px) {
    h3 {
      font-size: 1.225rem !important;
    }
    h4,
    div,
    span {
      font-size: 0.737rem !important;
    }
  }
  @media (max-width: 355px) {
    h3 {
      font-size: 1.2rem !important;
    }
    h1 {
      font-size: 0.65rem !important;
    }
  }
`;
const StyledImageHeader = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  overflow: hidden;
  /* background-color: #0d0d0d; */
  /* opacity: 1; */
  z-index: 2;
  img {
    max-width: 100%;
    object-fit: contain;
    z-index: 1;
  }
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/4;
  }
  @media (max-width: 480px) {
  }
`;

const StyledTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/3;
  align-self: center;
  justify-self: center;
  z-index: 3;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/4;
    h2 {
      font-size: 2rem !important;
    }
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 321px) {
    h2 {
      font-size: 2rem !important;
    }
  }
`;

const StyledResumeExperience = styled(motion.div)`
  padding: 0 2rem 0 2rem;
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 3fr;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-column: 1/4;
  }
  @media (max-width: 480px) {
  }
`;

const StyledResumeObjective = styled(motion.div)`
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
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

const StyledResumeWorkExperience = styled(motion.div)`
  grid-row: 2/3;
  align-self: start;
  justify-self: start;
  ul {
    padding: 0rem 0rem 0rem 2rem;
    text-align: start;
    list-style-position: initial;
    color: white;
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
  /* li {
    padding: 0rem 0rem 0rem 2rem;
  } */
`;
// const StyledResumeWorkExperience2 = styled(motion.div)`
//   grid-row: 3/4;
//   align-self: center;
//   justify-self: start;
//   ul {
//     padding: 0rem 0rem 0rem 2rem;
//     text-align: start;
//     list-style-position: inside;
//     color: white;
//   }
// `;

const StyledAboutGrid = styled(motion.div)`
  padding: 0rem 2rem 0rem 2rem;
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  /* border-left: 1px solid white; */
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-row: 3/4;
    grid-column: 1/4;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.5rem;
  }
  /* @media (max-width: 480px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  } */
`;

const StyledContactInformation = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: start;
  color: white;
  padding: 2rem 0 2rem 0;
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
  }
`;

const StyledSkills = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
  color: white;
  padding: 2rem 0 2rem 0;
  display: grid;
  grid-template-rows: 1fr 3fr;
  align-items: center;
  justify-items: start;
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-column: 2/3;
    align-self: center;
    justify-self: center;
    grid-row: 1/2;
  }
`;

const StyledEducation = styled(motion.div)`
  width: 100%;
  height: 100%;
  color: white;
  grid-row: 3/4;
  align-self: center;
  justify-self: start;
  padding: 2rem 0 2rem 0;
  overflow: hidden;
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-column: 3/4;
    align-self: center;
    justify-self: center;
    grid-row: 1/2;
  }
`;

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
export default KnowledgeExperience;
