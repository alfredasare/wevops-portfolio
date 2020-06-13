import styled from "styled-components";

export const LoadingScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Loader = styled.h1`
  font-size: 3em;
  
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: fade 2s ease-in-out infinite;
  @keyframes fade {
    0% {
      opacity: 1.0;
    }
    
    50% {
      opacity: 0.6;
    }
    
    100% {
      opacity: 1.0;
    }
  }
`;