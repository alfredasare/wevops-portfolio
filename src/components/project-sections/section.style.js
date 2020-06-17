import styled from "styled-components";


export const SectionWrapper = styled.div`
  & *{
  width: 90%;
  max-height: 90vh;
  margin: 50px 5%;
  }
`;
export const SectionImage = styled.img`
  object-fit: contain; 
  border-radius: 4px;
`;
export const SectionVideo = styled.video`
  transition: all 1s ease-in-out;
`;