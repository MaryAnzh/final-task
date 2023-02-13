import Link from 'next/link'
import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import { LoginSVG } from '../loginSVG';
import {
    LoginStyled
} from './styled';

export const LoginWrap = (props: {text: string}) => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    
    return (
        <LoginStyled>
            <Link href='/login'>{t.LOGIN}</Link>
            <LoginSVG />
        </LoginStyled>
    );
}