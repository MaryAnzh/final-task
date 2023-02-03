import { FC } from "react";
import { AuthForm } from "@/components/common/authForm/aithForm";
import { useStore } from "@/context";
import router from "next/router";

const Authorization: FC = () => {
   const [state, dispatch] = useStore();
  const { data: user, loading, authorization } = state;

    if (authorization) {
      router.replace("/");
    }
    // console.log(loading);
  return (
    <AuthForm/>
  );
};

export default Authorization;
