import styled  from "styled-components";


export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;
export const Form = styled.form`
    max-width: 400px;
    width: 100vw;
    border: 1px solid black;
    border-color: ${props => props.color ? props.color : 'black'};
    border-radius: 20px;
    padding: 20px 30px 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
export const Input = styled.input`
    width: 100%;
    font-size: 1.5em;
    border: none;
    border-bottom : 2px solid black;
    border-color: ${props => props.color ? props.color : 'black'};
    outline: none;
    background-image: url(${props => props.src ? props.src : ''});
    background-repeat: no-repeat;
    background-position: 4px;
    background-size: 28px 28px;
    padding-left: 35px;
   `;
export const Button = styled.button`
    width: 100%;
    font-size: 1em;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${props => props.color ? props.color : 'lightblue'};
    transition: .2s;
    &:hover {
      cursor: pointer;
      opacity: .8
    }
    `