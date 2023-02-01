import { Form, Input, Title, Button } from "./styled";
import postIcon from "../../../icons/post.png";
import lock from "../../../icons/lock.png";
import { useForm } from "@/hooks/useForm";
import { FormEvent } from "react";
import { UserApi } from "@/utils/api";
import IUser from "@/interfaces/user";
import { setCookie } from "nookies";
import { AxiosError } from "axios";

const main_blu_color = 'blue';

const AuthForm = () => {
  const initialValue: IUser = { email: "", password: "" };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const clickToSignUpUser = async (e: FormEvent) => {
    try{
      e.preventDefault();
      const {token}  = await UserApi.register(values);
      setCookie(null, 'rtoken', token , {
        maxAge : 60 * 60 * 2,
        path: '/'
      });
      setValues(initialValue);
    } catch(e) {
      if( e instanceof AxiosError) {
         console.log(`Регистрация не удалась: ${e}`);
      }
      console.log(`Регистрация не удалась: ${e}`)
    }
}
  const clickToSignInUser = async (e: FormEvent) => {
    try{
      e.preventDefault();
      const { token }  = await UserApi.login(values);
      setValues(initialValue);
    } catch(e) {
      if( e instanceof AxiosError) {
         console.log(`Вход не удался: ${e}`);
      }
      console.log(`Вход не удалася: ${e}`)
    }
}
  return (
    <Form name={'authForm'} color={main_blu_color} onSubmit={(e: FormEvent) => e.preventDefault()}>
      <Title>Authorization</Title>
      <Input
        name={'email'}
        type={"email"}
        placeholder={"E-mail"}
        value={email}
        onChange={handleChange}
        src={postIcon.src}
        color={main_blu_color}
      />
      <Input
        name={'password'}
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={handleChange}
        src={lock.src}
        color={main_blu_color}
      />
      <Button onClick={clickToSignUpUser} >Sign In</Button>
      <Button onClick={clickToSignInUser} >Sign Up</Button>
    </Form>
  );
};

export default AuthForm;
