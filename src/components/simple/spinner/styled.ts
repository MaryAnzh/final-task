import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 1.1em;
  height: 1.1em;
  margin: 0 auto;
  border-radius: 50%;
  display: block;
  z-index: 2;
`;

const spinnerCircle = keyframes`
0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const I = styled.i`
  &:after {
    position: absolute;
    clip: rect(0, 3em, 2em, 0.2em);
    width: 1.1em;
    height: 1.1em;
    content: '';
    animation: ${spinnerCircle} 0.8s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: inset 0 0 0 0.1em blue;
  }
`;
