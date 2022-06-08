import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const ProjectCard = ({ title, img }) => {
  return (
    <>
      <StyledCard>
        <StyledCardImg>
          <img src={img} alt={title} />
        </StyledCardImg>
        <StyledCardTitle>
          <h3>{title}</h3>
        </StyledCardTitle>
      </StyledCard>
    </>
  );
};

const StyledCard = styled(motion.div)`
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 3fr 1fr;
  overflow: hidden;
`;
const StyledCardImg = styled(motion.div)`
  grid-row: 1/2;
  /* grid-column: 1/2; */
  align-self: center;
  justify-self: center;
  img {
    object-fit: fill;
  }
  overflow: hidden;
`;
const StyledCardTitle = styled(motion.div)`
  grid-row: 2/3;
  /* grid-column: 1/2; */
  align-self: center;
  justify-self: center;
  color: white;
  overflow: hidden;

  h3 {
    font-size: 30px;
  }
`;

export default ProjectCard;
