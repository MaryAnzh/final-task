import styled from "styled-components";

export const LogoWrap = styled.div`
width: calc(66.3px);
height: calc(33.2px);
cursor: pointer;

  svg {
    width: 100%;
    
    .svg-logo {
        fill:none;
        stroke: ${(props) => props.theme.themeColor.logoStroke};
        stroke-width:2;
        stroke-linecap:round;
        stroke-linejoin:round;
        stroke-miterlimit:10;
    }

    .svg-text {
        fill: ${(props) => props.theme.themeColor.logoFill};
    }

    circle {
        fill:  ${(props) => props.theme.themeColor.logoAccent};
    }
  }
  &:hover {
    svg {
        circle:nth-child(3) {
            animation: logo-jump-down 0.8s infinite;
        }

        circle:nth-child(4) {
            animation: logo-jump-up 0.6s infinite;
        }
        circle:nth-child(5) {
            animation: logo-jump-down 0.8s 0.3s infinite;
        }
    }
  }
`;