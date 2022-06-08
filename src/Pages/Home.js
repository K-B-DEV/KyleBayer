import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Landing from "../components/Landing";
import KnowledgeExperience from "../components/KnowledgeExperience";
import Nav from "../components/Nav";
import ExampleProjects from "../components/ExampleProjects";
import SplashSplitPage from "../components/SplashSplitPage";
import { useSelector } from "react-redux";
//animation
import { pageAnimation } from "../animations";

const Home = () => {
  const { state } = useSelector((state) => state.state);
  return (
    <StyledHomePage
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {state ? (
        <SplashSplitPage />
      ) : (
        <>
          <Nav />
          <section className="one" id="Home">
            <Landing />
          </section>
          <section className="two" id="Resume">
            <KnowledgeExperience />
          </section>
          <section className="three" id="Projects">
            <ExampleProjects />
          </section>
        </>
      )}
    </StyledHomePage>
  );
};

const StyledHomePage = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  section {
    scroll-snap-align: end;
  }
`;
export default Home;
