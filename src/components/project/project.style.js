import styled from "styled-components";
import {typeScale} from "../../utils";

export const ProjectWrapper = styled.div`
  position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 4px;
  cursor: pointer;
  &:hover >:first-child{
  transform: scale(0.97);
  &::before{
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.30);
  width: 100%;
  height: 100%;
  }
  }
`;
export const ImageContainer = styled.div`
  border-radius: 4px;
  transition: all 0.2s ease-out;
`;
export const Image = styled.img`
  border-radius: 4px;
  width: 85vw;
  max-height: 90vh;
  object-fit: cover;
`;
export const ProjectLogo = styled.img`
  width: 5rem;
  position: absolute;
  z-index: 2;
  @media only screen and (min-width: 600px){
    width: 9rem;
  }
`;
export const ProjectReason = styled.h4`
  font-size: ${typeScale.header4};
  color: white;
  position: absolute;
  z-index: 3;
`;
