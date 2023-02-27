import Link from 'next/link';
import { LoginStyled } from '../login/styled';
import { signOut } from 'next-auth/react';
import { useStore } from '@/context';
import { userFailCreator } from '@/context/actions';

export const LoginOut = () => {
  const [state, dispatch] = useStore();

  const handleClick = () => {
    signOut({
      redirect: false,
    }).then(() => dispatch(userFailCreator()));
  };

  return (
    <LoginStyled>
      <Link
        href='/'
        onClick={handleClick}
      >
        LoginOut
      </Link>
    </LoginStyled>
  );
};

export default LoginOut;
