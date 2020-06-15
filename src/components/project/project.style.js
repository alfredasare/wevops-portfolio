import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

export const ProjectWrapper = styled.div`
  width: 85vw;
  height: 280px;
  position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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
   @media only screen and (min-width: 600px){
    height: 90vh;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: ${fadedBlack};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.2s ease-out;
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
  opacity: 0;
`;
