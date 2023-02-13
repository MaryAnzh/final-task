import { FC } from 'react';

import { LoginSVgStyled } from './styled';

export const LockSVG: FC = () => {
  return (
    <LoginSVgStyled>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        // style="enable-background:new 0 0 50 50;"
        xmlSpace="preserve"
      >
        <path
          d="M25,49C11.8,49,1,38.2,1,25S11.8,1,25,1s24,10.8,24,24S38.2,49,25,49z M25,4C13.4,4,4,13.4,4,25c0,11.6,9.4,21,21,21
	c11.6,0,21-9.4,21-21C46,13.4,36.6,4,25,4z"
        />
        <path
          d="M34.5,22.5c-0.1-1.6-1.4-2.8-3-2.7L21,20.3v-4.2c0.7-1.6,2.3-2.8,4.1-2.7c2,0,3.3,2,3.8,2.9c0,0,0.1,0.1,0.1,0.1
	c0.3,0.5,0.9,0.6,1.3,0.3c0.5-0.3,0.6-0.9,0.4-1.4c-1.4-2.5-3.4-4-5.5-4c0,0,0,0,0,0c-2.6,0-5,1.6-6,4.1c0,0.1-0.1,0.2-0.1,0.4v4.5
	l-1.4,0.1c-1.6,0.1-2.8,1.4-2.7,3l0.5,10c0,0.8,0.4,1.5,0.9,2c0.5,0.5,1.2,0.7,1.9,0.7c0,0,0.1,0,0.1,0l13.9-0.6
	c0.8,0,1.5-0.4,2-0.9c0.5-0.6,0.8-1.3,0.7-2L34.5,22.5z M32.7,33.2c-0.2,0.2-0.4,0.3-0.6,0.3l-13.9,0.6c-0.2,0-0.4-0.1-0.6-0.2
	c-0.2-0.2-0.3-0.4-0.3-0.6l-0.5-10c0-0.5,0.3-0.9,0.8-0.9l13.9-0.6c0,0,0,0,0,0c0.4,0,0.8,0.4,0.8,0.8l0.5,10
	C33,32.8,32.9,33,32.7,33.2z"
        />
        <g>
          <circle cx="25" cy="27.3" r="2" />
          <rect x="23.9" y="28.1" width="2.3" height="3" />
        </g>
      </svg>
    </LoginSVgStyled>
  );
};

export default LockSVG;