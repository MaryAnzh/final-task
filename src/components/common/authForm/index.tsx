import Link from 'next/link';
import { Button, Form, Input, Title } from '../loginForm/styled';
import { UserApi } from '@/utils/api';
import { FormEvent } from 'react';
import { useForm } from '@/hooks/useForm';
import IUser from '@/interfaces/user';
import { AxiosError } from 'axios';
import lock from '@/icons/lock.png';
import postIcon from '@/icons/post.png';
import { useStore } from '@/context';
import {
  userFailCreator,
  userLoginCreator,
  userRequestCreator,
} from '@/context/actions';
import router from 'next/router';
import Spinner from '@/components/simple/spinner';

const main_blu_color = 'blue';

const AuthForm = () => {
  const initialValue: IUser = { email: '', password: '' };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const [state, dispatch] = useStore();

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

  return state.loading ? (
    <Spinner />
  ) : (
    <Form
      name={'authForm'}
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
      <Button onClick={clickToSignUpUser}>Sign Up</Button>
      <p>
        Do you have an account? <Link href={'/login'}>Sign In</Link>
      </p>
    </Form>
  );
};

export default AuthForm;
