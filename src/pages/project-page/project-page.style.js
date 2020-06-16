import styled from "styled-components";
import {NavBarBrand} from "../../components/navbar/navbar.styles";
import {ProjectReason} from "../../components/project/project.style";


export const ProjectPageWrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeroImage = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 5vh;
  width: 90%;
  position: relative;
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
  & > svg{
  width: 50%;
  }
`;
export const ProjectReason2 = styled(ProjectReason)`
`;
export const Indicator = styled.div`
  height: 10px;
  width: 4px;
  border-radius: 30%;
  background: white;
  position: absolute;
  left: 50%;
  bottom: 25vh;
`;