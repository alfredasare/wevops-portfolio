import styled from "styled-components";
import {NavBarBrand} from "../../components/navbar/navbar.styles";
import {ProjectReason} from "../../components/project/project.style";
import {fadedBlack} from "../../utils";


export const ProjectPageWrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeroImage = styled.img`
  margin: 5vh;
  width: 90%;
  position: relative;
  border-radius: 4px;
  max-height: 90vh;
  object-fit: cover;
    &::before{
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.45);
  width: 100%;
  height: 100%;
  }
`;
export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
  position: absolute;
`;
export const Icon = styled(NavBarBrand)`
  position: fixed;
  left: 10px;
  top: 50%;
  width: 35px;
`;
export const CloseButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  position: fixed;
  top: 50%;
  right: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
  & > svg{
  width: 50%;
  }
  &:hover{
  background-color: ${fadedBlack}
  }
`;
export const ProjectReason2 = styled(ProjectReason)`
  position: absolute;
  z-index: 1;
  font-size: 5vh;
  max-width: 70vw;
  text-align: center;
  @media only screen and (max-width: 1200px){
  transform: none !important;
  opacity: 1;
  }
`;
export const Indicator = styled.div`
  height: 10px;
  width: 4px;
  border-radius: 30%;
  background: white;
  position: absolute;
  left: 50%;
  bottom: 30%;
`;