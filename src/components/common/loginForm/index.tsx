import { Form, Input, Title, Button } from './styled';
import postIcon from '@/assets/icons/post.svg';
import lock from '@/assets/icons/lock.svg';
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
import { loginForm_en as en } from '@/data/locales/loginForm_en';
import { loginForm_ru as ru } from '@/data/locales/loginForm_ru';

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
  const t = router.locale === 'en' ? en : ru;

  return state.loading ? (
    <Spinner />
  ) : (
    <Form
      name={'loginForm'}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Title>{t.LOGIN}</Title>
      <Input
        name={'email'}
        type={'email'}
        placeholder={t.E_MAIL}
        value={email}
        onChange={handleChange}
        src={postIcon.src}
      />
      <Input
        name={'password'}
        type={'password'}
        placeholder={t.PASSWORD}
        value={password}
        onChange={handleChange}
        src={lock.src}
      />
      <Button onClick={handelGithabSignIn}>{t.GIT_SIGN_IN}</Button>
      <Button onClick={clickToSignInUser}>{t.SIGN_IN}</Button>
      <p>
        {t.TEXT} <Link href='/authorization'>{t.SIGN_UP}</Link>
      </p>
    </Form>
  );
};
