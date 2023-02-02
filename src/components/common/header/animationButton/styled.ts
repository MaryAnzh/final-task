import styled from 'styled-components';

export const AnimationButton = styled.button`
padding: 5px 10px;
border: none;
border-radius: 4px;
background: ${props => props.theme.themeColor.header.button};
color: #ffffff;
cursor: pointer;
text-transform: uppercase;
transition: .3s;

&:hover {
    background: ${props => props.theme.variable.mainDark};
    box-shadow: 2px 2px 4px ${props => props.theme.variable.mainLight2};

}

`;