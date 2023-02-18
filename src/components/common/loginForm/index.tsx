import { AxiosError } from 'axios';
import { getSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, FormEvent, useState } from 'react';

import CustomInput from '@/components/simple/customInput';
import LockSVG from '@/components/simple/lockSVG';
import PostSVG from '@/components/simple/postSVG';
import Spinner from '@/components/simple/spinner';

import { useStore } from '@/context';
import {
  userFailCreator,
  userLoginCreator,
  userRequestCreator,
} from '@/context/actions';
import { TStore } from '@/context/interfaces';

import { RoutingEnum } from '@/data/constants/routing';
import { loginForm_en as en } from '@/data/locales/loginForm_en';
import { loginForm_ru as ru } from '@/data/locales/loginForm_ru';

import { useForm } from '@/hooks/useForm';

import IUser from '@/interfaces/user';

import validEmail from '@/utils/validEmail';
import validPass from '@/utils/validPass';

import { Button, ErrorText, Form, Title } from './styled';

export const LoginForm: FC = () => {
  const initialValue: IUser = { email: '', password: '', name: '', image: '' };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const router = useRouter();
  const [state, dispatch] = useStore();
  const [error, setError] = useState('');

  const clickToSignInUser = async (e: FormEvent) => {
    try {
      setError('');
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
      } else {
        throw new Error(result.error);
      }
      setValues(initialValue);
    } catch (e) {
      dispatch(userFailCreator());
      if (e instanceof AxiosError) {
        console.log(`Вход не удался: ${e}`);
      }
      console.log(`Вход не удалася: ${e}`);
      setError(`Вход не удалася: ${e}`);
    }
  };

  const handleGithabSignIn = async () => {
    await signIn('github', { callbackUrl: RoutingEnum.baseUrl });
  };

  if (state.authorization) {
    router.replace('/');
    return null;
  }
  const t = router.locale === 'en' ? en : ru;

  return (
    <Form
      name={'loginForm'}
      noValidate={true}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Title>{t.LOGIN}</Title>
      <CustomInput
        svg={<LockSVG />}
        name={'email'}
        type={'email'}
        placeholder={t.E_MAIL}
        onChange={handleChange}
        value={email}
        err={t.VALID_E_MAIL}
        valid={validEmail(email)}
      />
      <CustomInput
        svg={<PostSVG />}
        name={'password'}
        type={'password'}
        placeholder={t.PASSWORD}
        onChange={handleChange}
        value={password}
        err={t.VALID_PASS}
        valid={validPass(password)}
      />
      <Button onClick={handleGithabSignIn}>{t.GIT_SIGN_IN}</Button>
      <Button
        onClick={clickToSignInUser}
        disabled={
          !validPass(password) ||
          !validEmail(email) ||
          password.length === 0 ||
          email.length === 0
        }
      >
        {state.loading ? <Spinner /> : t.SIGN_IN}
      </Button>
      <p>
        {t.TEXT} <Link href={RoutingEnum.authorization}>{t.SIGN_UP}</Link>
      </p>
      {error && <ErrorText>{error}</ErrorText>}
    </Form>
  );
};
