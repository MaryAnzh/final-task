import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${({ theme }) => theme.variable.contrastRedLight};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.variable.contrastRedLight};
  font-size: 1em;
`;


export const Form = styled.form`
  max-width: 400px;
  margin: 20px 0;
  width: 100vw;
  border: 1px solid black;
  border-color: ${({ theme }) => theme.variable.mainLight};
  border-radius: 20px;
  padding: 20px 30px 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 420px) {
    & {
      border: none;
    }
  }
  a {
    color: ${({ theme }) => theme.variable.main};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.variable.mainDark2};
    }
  }

  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: smoothAppear;

  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  font-size: 1.5em;
  border: none;
  border-bottom: 2px solid black;
  border-color: ${({ theme }) => theme.themeColor.header.button};
  outline: none;
  background-image: url(${(props) => (props.src ? props.src : '')});
  background-repeat: no-repeat;
  background-position: 4px;
  background-size: 28px 28px;
  padding-left: 35px;
  @media (max-width: 420px) {
    & {
      font-size: 1em;
    }
  }
`;
export const Button = styled.button`
  dispaly: block;
  width: 100%;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.themeColor.header.button};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.variable.mainDark};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.variable.mainLight2};
  }
`;