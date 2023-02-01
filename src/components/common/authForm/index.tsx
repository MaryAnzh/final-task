import { Form, Input, Title, Button } from "./styled";
import postIcon from "../../../icons/post.png";
import lock from "../../../icons/lock.png";
import { useForm } from "@/hooks/useForm";
import { FormEvent } from "react";
import { UserApi } from "@/utils/api";
import IUser from "@/interfaces/user";

const main_blu_color = 'blue';

const AuthForm = () => {
  const initialValue: IUser = { email: "", password: "" };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const handelClick = async (e: FormEvent) => {
    try{
      e.preventDefault();
      const res  = await UserApi.register(values);
      console.log(res);
      // setValues(initialValue);
    } catch(e) {
      console.log(`Регистрация не удалась: ${e}`);
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
      <Button onClick={handelClick} >Sign In</Button>
      <Button onClick={handelClick} >Sign Up</Button>
    </Form>
  );
};

export default AuthForm;
