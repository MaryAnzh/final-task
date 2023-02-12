import Link from 'next/link';
import { useRouter } from 'next/router';
import { LocalesStyled, LangEn, LangRu } from './styled'

export const Locales = () => {
    const router = useRouter();
    const locale = router.locale === 'en' ? 'en' : 'ru';

    return (
        <LocalesStyled>
            <Link href={router} locale='en'>
                <LangEn lang={locale}>En</LangEn>
            </Link>
            <Link href={router} locale='ru'>
                <LangRu lang={locale}>Ru</LangRu>
            </Link>
        </LocalesStyled>
    );
}