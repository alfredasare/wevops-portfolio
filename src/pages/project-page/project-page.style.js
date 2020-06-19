import styled from "styled-components";
import {NavBarBrand} from "../../components/navbar/navbar.styles";
import {ProjectReason} from "../../components/project/project.style";
import {fadedBlack, typeScale} from "../../utils";


export const ProjectPageWrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & *{
  border-radius: 4px;
  }
`;
export const HeroImage = styled.img`
  margin: 5vh;
  width: 90%;
  position: relative;
  border-radius: 4px;
  max-height: 90vh;
  object-fit: cover;
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
  background-color: rgba(0,0,0,0.54);
  position: absolute;
`;
export const Icon = styled(NavBarBrand)`
  position: fixed;
  left: 10px;
  top: 5%;
  width: 35px;
  @media only screen and (min-width: 600px){
  top: 50%;
  }
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
  top: 5%;
  right: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
  & > svg{
  width: 50%;
  }
  &:hover{
  background-color: ${fadedBlack}
  }
  @media only screen and (min-width: 600px){
    top: 50%;
  }
`;
export const ProjectReason2 = styled(ProjectReason)`
  position: absolute;
  z-index: 1;
  font-size: 4.5vw;
  max-width: 70vw;
  text-align: center;
  @media only screen and (max-width: 1200px){
  transform: scale(1)
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
export const LinkSection = styled.div`
  width: 90%;
  padding: 50px;
  margin-bottom: 50px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 600px){
  flex-direction: row;
  }
`;
export const LinkText = styled.h4`
  color: black;
  text-align: center;
  margin: 0;
  font-size: ${typeScale.header4};
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  & *{
    color: black;
  }
  & *:hover{
  color: ${fadedBlack};
  }
  &:hover ~ *{
  fill: ${fadedBlack};
  }
`;
export const LinkIcon = styled.div`
  height: min-content;
  margin-top: 30px;
  & > svg{
  color: black;
  width: ${typeScale.header4};
  transform: rotate(90deg);
  overflow: visible;
  }
  & > svg .hook-low{
  animation: move-out 1s both alternate infinite;
  }
  & > svg .hook-high{
  animation: move-in 1s both alternate infinite;
  }
  @keyframes move-out{
  0%{transform: translateX(0)}
  100%{transform: translateX(100px);}
  }
  @keyframes move-in{
  0%{transform: translateX(0)}
  100%{transform: translateX(-100px);}
  }
  @media only screen and (min-width: 600px){
  margin-left: 30px;
  margin-top: 0;
  }
`;
export const Next = styled.div`
  height: 50px;
  border-radius: 4px;
  background-color: black;
  overflow-y: hidden;
  cursor: pointer;
  position: relative;
  &:hover{
  height: 100px;
  top: -20px;
  transition: top 1s ease-in-out;
  }
  & > img{
  width: 90%;
  margin: 0 5%;
  filter: blur(2px);
  transition: all 0.5s ease-in-out;
  }
  & > *:hover{
  filter: blur(0);
  }
`;
export const NextTitle = styled.p`
  font-size: ${typeScale.paragraph};
  color: white;
  position: absolute;
  left: 10%;
  top: 5px;
  z-index: 2;
`;
export const NextText = styled(NextTitle)`
  left: auto;
  right: 10% !important;
`;
