import Link from 'next/link';
import { Button, Form, Input, Title } from '../loginForm/styled';
import { UserApi } from '@/utils/api';
import { FormEvent } from 'react';
import { useForm } from '@/hooks/useForm';
import IUser from '@/interfaces/user';
import { AxiosError } from 'axios';
import lock from '@/assets/icons/lock.svg';
import postIcon from '@/assets/icons/post.svg';
import { useStore } from '@/context';
import {
  userFailCreator,
  userLoginCreator,
  userRequestCreator,
} from '@/context/actions';
import router from 'next/router';
import Spinner from '@/components/simple/spinner';
import { authForm_en as en } from '@/data/locales/authForm_en';
import { authForm_ru as ru } from '@/data/locales/authForm_ru';
import { useRouter } from 'next/dist/client/router';

const main_blu_color = 'blue';

const AuthForm = () => {
  const initialValue: IUser = { email: '', password: '' };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const [state, dispatch] = useStore();
  const router = useRouter();

  const clickToSignUpUser = async (e: FormEvent) => {
    dispatch(userRequestCreator());
    try {
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
      if (e instanceof AxiosError) {
        console.log(`Регистрация не удалась: ${e}`);
      }
      console.log(`Регистрация не удалась: ${e}`);
    }
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
      name={'authForm'}
      color={main_blu_color}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Title>{t.AUYHORIZATION}</Title>
      <Input
        name={'email'}
        type={'email'}
        placeholder={t.E_MAIL}
        value={email}
        onChange={handleChange}
        src={postIcon.src}
        color={main_blu_color}
      />
      <Input
        name={'password'}
        type={'password'}
        placeholder={t.PASSWORD}
        value={password}
        onChange={handleChange}
        src={lock.src}
        color={main_blu_color}
      />
      <Button onClick={clickToSignUpUser}>{t.SIGN_UP}</Button>
      <p>
        {t.TEXT} <Link href={'/login'}>{t.SIGN_IN}</Link>
      </p>
    </Form>
  );
};

export default AuthForm;
