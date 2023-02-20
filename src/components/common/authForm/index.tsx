import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

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

import { RoutingEnum } from '@/data/constants/routing';
import { authForm_en as en } from '@/data/locales/authForm_en';
import { authForm_ru as ru } from '@/data/locales/authForm_ru';

import { useForm } from '@/hooks/useForm';

import IUser from '@/interfaces/user';

import { UserApi } from '@/pages/api/index';

import validEmail from '@/utils/validEmail';
import validPass from '@/utils/validPass';
import validateURL from '@/utils/validUrl';

import { Button, ErrorText, Form, Title } from '../loginForm/styled';

const AuthForm = () => {
  const initialValue: IUser = {
    email: '',
    password: '',
    name: '',
    image: '',
  };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password, name, image } = values;
  const [state, dispatch] = useStore();
  const [error, setError] = useState('');
  const router = useRouter();

  const clickToSignUpUser = async (e: FormEvent) => {
    dispatch(userRequestCreator());
    try {
      setError('');
      e.preventDefault();
      const user = await UserApi.register(values);
      // setCookie(null, "rtoken", token, {
      //   maxAge: 60 * 60 * 2,
      //   path: "/",
      // });
      dispatch(userLoginCreator({ ...user }));
      setValues(initialValue);
    } catch (e) {
      dispatch(userFailCreator());
      console.log(`Регистрация не удалась: ${e}`);
      setError(`Регистрация не удалась: ${e}`);
    }
  };

  if (state.authorization) {
    router.replace('/');
    return null;
  }
  const t = router.locale === 'en' ? en : ru;

  return (
    <Form
      name={'authForm'}
      noValidate={true}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Title>{t.AUYHORIZATION}</Title>
      <CustomInput
        // svg={<LockSVG />}
        name={'name'}
        type={'text'}
        placeholder={t.NAME}
        onChange={handleChange}
        value={name}
        err={t.VALID_PASS}
        valid={validPass(name)}
      />
      <CustomInput
        // svg={<LockSVG />}
        name={'image'}
        type={'text'}
        placeholder={t.AVATAR}
        onChange={handleChange}
        value={image}
        err={t.VALID_E_MAIL}
        valid={validateURL(image)}
        isNecessarily={false}
      />
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
      <Button
        onClick={clickToSignUpUser}
        disabled={
          !validPass(password) ||
          !validEmail(email) ||
          password.length === 0 ||
          email.length === 0 ||
          !validPass(name) ||
          name.length === 0
        }
      >
        {state.loading ? <Spinner /> : t.SIGN_UP}
      </Button>
      <p>
        {t.TEXT} <Link href={RoutingEnum.login}>{t.SIGN_IN}</Link>
      </p>
      {error && <ErrorText>{error}</ErrorText>}
    </Form>
  );
};

export default AuthForm;
