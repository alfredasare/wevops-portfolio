import styled from "styled-components";


export const ProjectPageWrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroImage = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  margin: 5vh;
  width: 80%;
`;