import Link from 'next/link';
import { LoginStyled } from '../login/styled';
import { signOut } from 'next-auth/react';
import { useStore } from '@/context';
import { userFailCreator } from '@/context/actions';

export const LoginOut = () => {
  const [state, dispatch] = useStore();

  const handelClick = () => {
    signOut({
      redirect: false,
    }).then(() => dispatch(userFailCreator()));
  };

  return (
    <LoginStyled>
      <Link
        href='/'
        onClick={handelClick}
      >
        LoginOut
      </Link>
    </LoginStyled>
  );
};

export default LoginOut;
