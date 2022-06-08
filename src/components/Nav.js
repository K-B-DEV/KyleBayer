import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
// import  from "@material-ui/icons/Menu";
import { useLocation } from "react-router-dom";
import {
  pageAnimation,
  DropDown,
  SlideInFromLeft,
  SlideInFromRight,
} from "../animations";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const size = useWindowSize();
  const location = useLocation();
  const pathname = location.pathname;
  console.log("Nav Path: " + pathname);
  return (
    <div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      {size.width ? (
        size.width > 768 ? (
          <StyledNavContainer
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
          >
            {pathname ? (
              pathname === "/Helium" ? (
                <>
                  <StyledNavLogo>
                    <StyledLink href="/#Home">
                      <h3>Kyle Bayer</h3>
                    </StyledLink>
                  </StyledNavLogo>
                </>
              ) : (
                <>
                  <StyledNavLogo>
                    <StyledLink href="/#Home">
                      <h3>Kyle Bayer</h3>
                    </StyledLink>
                  </StyledNavLogo>
                  <StyledLink1
                    whileHover={{
                      backgroundColor: "#ffffff",
                      padding: "1rem",
                      borderRadius: "1rem",
                      color: "#000000",
                    }}
                  >
                    <StyledLink href="/#Resume">
                      <h4>Resumé</h4>
                    </StyledLink>
                  </StyledLink1>

                  <StyledLink2
                    whileHover={{
                      backgroundColor: "#ffffff",
                      padding: "1rem",
                      borderRadius: "1rem",
                      color: "#000000",
                    }}
                  >
                    <StyledLink href="/#Projects">
                      <h4>Projects</h4>
                    </StyledLink>
                  </StyledLink2>

                  <StyledLink3
                    whileHover={{
                      backgroundColor: "#ffffff",
                      padding: "1rem",
                      borderRadius: "1rem",
                      color: "#000000",
                    }}
                  >
                    <StyledLinkR
                      to={{ pathname: "https://github.com/K-B-DEV" }}
                      target="_blank"
                      onClick={() => setOpen(!open)}
                    >
                      <h4>Github</h4>
                    </StyledLinkR>
                  </StyledLink3>
                </>
              )
            ) : (
              ""
            )}
          </StyledNavContainer>
        ) : (
          <>
            <StyledMobileNav onClick={() => setOpen(!open)}>
              {open ? (
                <MenuOpenIcon
                  style={{ color: "white", scale: 1.5, fontSize: "3.5rem" }}
                />
              ) : (
                <MenuIcon
                  style={{ color: "white", scale: 1.5, fontSize: "3.5rem" }}
                />
              )}
            </StyledMobileNav>
            <AnimatePresence>
              {open ? (
                <StyledDropDown
                  variants={DropDown}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key="DropDown"
                >
                  {pathname ? (
                    pathname === "/Helium" ? (
                      <>
                        {" "}
                        <StyledLink
                          href="/#Home"
                          onClick={() => setOpen(!open)}
                          variants={SlideInFromLeft}
                          whileHover={{
                            backgroundColor: "gainsboro",
                            padding: "1rem",
                            borderRadius: "1rem",
                            width: "90%",
                            // textAlign: "center",
                          }}
                        >
                          <h4>Home</h4>
                        </StyledLink>
                      </>
                    ) : (
                      <>
                        <StyledLink
                          href="/#Home"
                          onClick={() => setOpen(!open)}
                          variants={SlideInFromLeft}
                          whileHover={{
                            backgroundColor: "gainsboro",
                            padding: "1rem",
                            borderRadius: "1rem",
                            width: "90%",
                            // textAlign: "center",
                          }}
                        >
                          <h4>Home</h4>
                        </StyledLink>
                        <StyledLink
                          href="/#Resume"
                          onClick={() => setOpen(!open)}
                          variants={SlideInFromLeft}
                          whileHover={{
                            backgroundColor: "gainsboro",
                            padding: "1rem",
                            borderRadius: "1rem",
                            width: "90%",
                          }}
                        >
                          <h4>Resumé</h4>
                        </StyledLink>
                        <StyledLink
                          href="/#Projects"
                          onClick={() => setOpen(!open)}
                          variants={SlideInFromLeft}
                          whileHover={{
                            backgroundColor: "gainsboro",
                            padding: "1rem",
                            borderRadius: "1rem",
                            width: "90%",
                          }}
                        >
                          <h4>Projects</h4>
                        </StyledLink>
                        <motion.div
                          variants={SlideInFromLeft}
                          exit={SlideInFromRight}
                          whileHover={{
                            backgroundColor: "gainsboro",
                            padding: "1rem",
                            borderRadius: "1rem",
                            width: "90%",
                          }}
                        >
                          <StyledLinkR
                            to={{ pathname: "https://github.com/K-B-DEV" }}
                            target="_blank"
                            onClick={() => setOpen(!open)}
                          >
                            <h4>Github</h4>
                          </StyledLinkR>
                        </motion.div>
                      </>
                    )
                  ) : (
                    ""
                  )}
                </StyledDropDown>
              ) : (
                ""
              )}
            </AnimatePresence>
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};
const StyledMobileNav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding-left: 1rem;
  z-index: 98;
  overflow: hidden;
`;

const StyledDropDown = styled(motion.div)`
  position: absolute;
  top: 10vh;
  left: 0;
  min-height: 7.5vh !important;
  max-height: 30vh !important;
  width: 100vw;
  background-color: white;
  z-index: 11;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  h4 {
    color: #0d0d0d;
  }
`;

const StyledNavContainer = styled(motion.div)`
  height: 10vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  color: white;
`;
const StyledNavLogo = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  h3 {
    font-size: 2.2rem;
  }
`;
const StyledLink1 = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  background-color: transparent;
  h4 {
    color: inherit;
  }
`;
const StyledLink2 = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 3/4;
  align-self: center;
  justify-self: center;
  background-color: transparent;
  h4 {
    color: inherit;
  }
`;
const StyledLink3 = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 4/5;
  align-self: center;
  justify-self: center;
  background-color: transparent;
  h4 {
    color: inherit;
  }
`;

const StyledLink = styled(motion.a)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 480px) {
  }
`;

const StyledLinkR = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledDrawer = styled(motion.div)`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  h4 {
    padding: 1rem;
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

export default Nav;
