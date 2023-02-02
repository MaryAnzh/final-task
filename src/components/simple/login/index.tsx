import Image from "next/image";
import Link from "next/link"
import { LoginSVG } from "../loginSVG";
import { LoginStyled } from "./styled";

export const LoginWrap = () => {
    return (
        <LoginStyled>
            <Link href='/auth'>Login</Link>
            <LoginSVG />
        </LoginStyled>
    );
}