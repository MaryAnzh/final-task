import styled from "styled-components";

export const TeamAnimationBlockWrap = styled.div`
    width: 250px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transform: scale(0.75) rotateY(-35deg) rotateX(45deg) translateZ(4.5rem);
    transform-origin: 50% 100%;
    transform-style: preserve-3d;
    box-shadow: 1rem 1rem 2rem rgb(0 0 0 / 25%);
    transition: 0.3s ease transform;
    background: ${({ theme }) => theme.themeColor.cardBackground};
    cursor: pointer;
     
    h3 {
        position: absolute;
        font-size: 2.6rem;
        font-weight: bold;
        color: ${({ theme }) => theme.themeColor.cardFontColor};
        transition: .3s;
        opacity: 1;
    }

    figure {
        width: 90%;
        height: 90%;
        opacity: 0;
        transition: all .3s;
        img {
            width: 80px;
            height: 80px;
            float: left;
            margin-right: 10px;
            border-radius: 50%;
        }
        p {
            padding-left: 10px;
            font-size: 13px;
        }
    }

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.variable.main};
      border-radius: 4px;
      opacity: 1;
      transform: translateZ(-3rem);
    }

    &::after {
      position: absolute;
      content: '';
      width: 250px;
      height: 200px;
      border-radius: 4px;
      border: 2px dotted ${({ theme }) => theme.variable.mainDark};
      transform: translateZ(1rem);
      opacity: 1;
      transition: all .3s;
    }

    &:hover {
      transform: translateZ(0);

      h3 {
        opacity: 0;
      }

      figure {
        opacity: 1;
      }

      &::after {
        opacity: 0;
      }
    }
`;