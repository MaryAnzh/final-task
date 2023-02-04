import { Form, Input, Title, Button } from "./styled";
import postIcon from "../../../icons/post.png";
import lock from "../../../icons/lock.png";
import { useForm } from "@/hooks/useForm";
import { FC, FormEvent, useEffect } from "react";
import { UserApi } from "@/utils/api";
import IUser from "@/interfaces/user";
import { setCookie } from "nookies";
import { AxiosError } from "axios";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useStore } from "@/context";
import { userFailCreator, userLoginCreator, userRequestCreator } from "@/context/actions";
import { TStore } from "../../../context/interfaces";
import Spinner from "@/components/simple/spinner";

const main_blu_color = "blue";

export const AuthForm: FC = () => {
  const initialValue: IUser = { email: "", password: "" };
  const { values, handleChange, setValues } = useForm<IUser>(initialValue);
  const { email, password } = values;
  const router = useRouter();
  const [state, dispatch] = useStore();

  const clickToSignUpUser = async (e: FormEvent) => {

    useEffect(() => {}, []);

    try {
      e.preventDefault();

      const { token } = await UserApi.register(values);
      setCookie(null, "rtoken", token, {
        maxAge: 60 * 60 * 2,
        path: "/",
      });
      setValues(initialValue);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(`Регистрация не удалась: ${e}`);
      }
      console.log(`Регистрация не удалась: ${e}`);
    }
  };
  const clickToSignInUser = async (e: FormEvent) => {
    try {
      e.preventDefault();

      dispatch(userRequestCreator());
      const { email, password } = values;
      const result = await signIn("credentials", {
        redirect: false,
        username: email,
        password,
      });
      if (!result?.error) {
        const session = await getSession();
        if (session) dispatch(userLoginCreator(session?.user as TStore));
        router.replace("/");
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

    if (state.authorization) {
      router.replace("/");
      return null
    }

  return state.loading ? <Spinner/> : (
    <Form
      name={"authForm"}
      color={main_blu_color}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Title>Authorization</Title>
      <Input
        name={"email"}
        type={"email"}
        placeholder={"E-mail"}
        value={email}
        onChange={handleChange}
        src={postIcon.src}
        color={main_blu_color}
      />
      <Input
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={handleChange}
        src={lock.src}
        color={main_blu_color}
      />
      <Button onClick={clickToSignUpUser}>Sign Up</Button>
      <Button onClick={clickToSignInUser}>Sign In</Button>
    </Form>
  )
};

