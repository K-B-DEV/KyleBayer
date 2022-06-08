import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Nav from "../components/Nav";
import Pitch from "../components/Pitch";
import HRequirements from "../components/HRequirements";
import AboutHelium from "../components/AboutHelium";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadStats } from "../actions/statsActions";

const Helium = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStats());
  }, [dispatch]);
  const { stats } = useSelector((state) => state.stats);
  return (
    <>
      <StyledHeliumPage>
        <Nav />
        <section id="Pitch">
          <Pitch />
        </section>
        <section id="Requirements">
          <HRequirements />
        </section>
        <section id="AboutHelium">
          <AboutHelium
            hotspots={stats.hotspots}
            cities={stats.cities}
            countries={stats.countries}
          />
        </section>
      </StyledHeliumPage>
    </>
  );
};

const StyledHeliumPage = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  section {
    scroll-snap-align: end;
  }

  @media (max-width: 769px) {
    h2 {
      font-size: 5rem;
      text-align: center;
    }
    h4 {
      font-size: 1.4rem;
    }
    span {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 540px) {
    h2 {
      font-size: 3.8rem;
      text-align: center;
    }
    h4 {
      font-size: 1rem;
    }
    span {
      font-size: 1rem;
    }
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 3rem;
      text-align: center;
    }
    h4 {
      font-size: 0.9rem;
    }
    span {
      font-size: 0.9rem;
    }
    h3 {
      font-size: 1.35rem;
    }
    img {
      max-height: 19vh;
    }
  }
  @media (max-width: 380px) {
    h2 {
      font-size: 2.8rem;
      text-align: center;
    }
    h4 {
      font-size: 0.8rem;
    }
    span {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 1.15rem;
    }
    img {
      max-height: 17vh;
    }
  }
  @media (max-width: 365px) {
    h2 {
      font-size: 2.5rem;
      text-align: center;
    }
    h4 {
      font-size: 0.8rem;
    }
    span {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 325px) {
    h2 {
      font-size: 2.3rem;
      text-align: center;
    }
    h4 {
      font-size: 0.65rem;
    }
    span {
      font-size: 0.65rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 280px) {
    h2 {
      font-size: 2.3rem;
      text-align: center;
    }
    h4 {
      font-size: 0.65rem;
    }
    span {
      font-size: 0.65rem;
    }
    h3 {
      font-size: 0.9rem;
    }
    img {
      max-height: 12.5vh;
    }
  }
`;

export default Helium;
