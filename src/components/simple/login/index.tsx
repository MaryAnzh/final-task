import Link from 'next/link'
import { LoginSVG } from '../loginSVG';
import {
    LoginStyled
} from './styled';

export const LoginWrap = (props: {text: string}) => {
    return (
        <LoginStyled>
            <Link href='/login'>Login</Link>
            <LoginSVG />
        </LoginStyled>
    );
}