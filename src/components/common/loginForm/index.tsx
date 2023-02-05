import { Form, Input, Title, Button } from './styled';
import postIcon from '@/icons/post.png';
import lock from '@/icons/lock.png';
import { useForm } from '@/hooks/useForm';
import { FC, FormEvent } from 'react';
import IUser from '@/interfaces/user';
import { AxiosError } from 'axios';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useStore } from '@/context';
import {
  userFailCreator,
  userLoginCreator,
  userRequestCreator,
} from '@/context/actions';
import { TStore } from '@/context/interfaces';
import Spinner from '@/components/simple/spinner';
import Link from 'next/link';

const main_blu_color = 'blue';

export const LoginForm: FC = () => {
  const initialValue: IUser = { email: '', password: '' };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const router = useRouter();
  const [state, dispatch] = useStore();

  const clickToSignInUser = async (e: FormEvent) => {
    try {
      e.preventDefault();

      dispatch(userRequestCreator());
      const { email, password } = values;
      const result = await signIn('credentials', {
        redirect: false,
        username: email,
        password,
      });
      if (!result?.error) {
        const session = await getSession();
        if (session) dispatch(userLoginCreator(session?.user as TStore));
        router.replace('/');
      }
      setValues(initialValue);
    } catch (e) {
      dispatch(userFailCreator());
      if (e instanceof AxiosError) {
        console.log(`Вход не удался: ${e}`);
      }
      console.log(`Вход не удалася: ${e}`);
    }
  };

  const handelGithabSignIn = async () => {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  };

  if (state.authorization) {
    router.replace('/');
    return null;
  }

  return state.loading ? (
    <Spinner />
  ) : (
    <Form
      name={'loginForm'}
      color={main_blu_color}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Title>Authorization</Title>
      <Input
        name={'email'}
        type={'email'}
        placeholder={'E-mail'}
        value={email}
        onChange={handleChange}
        src={postIcon.src}
        color={main_blu_color}
      />
      <Input
        name={'password'}
        type={'password'}
        placeholder={'Password'}
        value={password}
        onChange={handleChange}
        src={lock.src}
        color={main_blu_color}
      />
      <Button onClick={handelGithabSignIn}>Sign In With GitHab</Button>
      <Button onClick={clickToSignInUser}>Sign In</Button>
      <p>
        Don't have an account? <Link href='/authorization'>Sign Up</Link>
      </p>
    </Form>
  );
};
