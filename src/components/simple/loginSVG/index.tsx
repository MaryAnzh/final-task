import { LoginSVgStyled } from './styled';

export const LoginSVG = (): JSX.Element => {
  return (
    <LoginSVgStyled>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 40 52.5'
      >
        <circle
          cx='20'
          cy='15'
          r='15'
        />
        <path
          d='M36.5,52.5H3.5C1.6,52.5,0,50.9,0,49V36c0-1.9,1.6-3.5,3.5-3.5h32.9c1.9,0,3.5,1.6,3.5,3.5V49C40,50.9,38.4,52.5,36.5,52.5z
	'
        />
      </svg>
    </LoginSVgStyled>
  );
};
