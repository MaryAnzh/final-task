import React from 'react'
import Link from 'next/link'
import isEmail from 'validator/lib/isEmail'
import {
    FooterStyled,
    FooterContainer,
    FooterLine,
    FirstRowLeft,
    FirstRowTitle,
    FirstRow,
    FirstRowButton,
    FirstRowText,
    FirstRowInputGroup,
    FirstRowInput,
    SecondRowImage,
    SecondRowText,
    SecondRow,
    SecondRowLeftPart,
    SecondRowSocials,
    SecondRowSocial,
    ThirdRow,
    ThirdRowCopyright,
    SecondRowSocialImage,
    SecondRowRightPart,
    SecondRowRightPartCol,
    SecondRowRightPartColTitle,

} from './styled'
import {SendMailApi} from '@/pages/api'
import {useRouter} from 'next/dist/client/router'
import {footer_en as en} from '@/data/locales/footer_en'
import {footer_ru as ru} from '@/data/locales/footer_ru'


const navList = ['about', 'contacts', 'authorization'];

const Footer = (): JSX.Element => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;


    const [enteredEmail, setEnteredEmail] = React.useState<string>('');
    const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredEmail(event.currentTarget.value);
    }

    const onSendEmailButtonClick = async () => {
        await SendMailApi.sendMail(enteredEmail);
        setEnteredEmail('');
    }

    return (
        <FooterStyled>
            <FooterContainer>
                <FirstRow>
                    <FirstRowLeft>
                        <FirstRowTitle>{t.TITLE}</FirstRowTitle>
                        <FirstRowText>{t.SUBTITLE_TEXT}</FirstRowText>
                    </FirstRowLeft>

                    <FirstRowInputGroup>
                        <FirstRowInput type="email" placeholder={t.PLACEHOLDER} value={enteredEmail} onChange={onEmailInputChange}/>
                        <FirstRowButton disabled={!isEmail(enteredEmail)} onClick={onSendEmailButtonClick}>{t.BUTTON}</FirstRowButton>
                    </FirstRowInputGroup>

                </FirstRow>
            </FooterContainer>

            <FooterLine/>

            <FooterContainer>
                <SecondRow>
                    <SecondRowLeftPart>
                        <SecondRowImage
                            src="/logo-light.svg"
                            alt="Team Logo"
                            width={59 * 1.5}
                            height={18 * 1.5}
                        />
                        <SecondRowText>{t.CREATED_BY}</SecondRowText>

                        <SecondRowSocials>
                            <SecondRowSocial href="https://github.com/MaryAnzh/final-task" target="_blank">
                                <SecondRowSocialImage src="/github.png" />
                            </SecondRowSocial>
                        </SecondRowSocials>
                    </SecondRowLeftPart>

                    <SecondRowRightPart>
                        <SecondRowRightPartCol>
                            <SecondRowRightPartColTitle>{t.LINKS.QUICK}</SecondRowRightPartColTitle>
                            {
                                navList.map((route: string): JSX.Element => (
                                    <Link href={route !== 'about' ? route : '/'} key={route} className="nav-item">{route}</Link>
                                ))
                            }
                        </SecondRowRightPartCol>
                        <SecondRowRightPartCol>
                            <SecondRowRightPartColTitle>{t.LINKS.SERVICE}</SecondRowRightPartColTitle>

                        </SecondRowRightPartCol>
                        <SecondRowRightPartCol>
                            <SecondRowRightPartColTitle>{t.LINKS.CONTACT}</SecondRowRightPartColTitle>

                        </SecondRowRightPartCol>
                    </SecondRowRightPart>
                </SecondRow>
            </FooterContainer>

            <FooterLine/>

            <FooterContainer>
                <ThirdRow>
                    <ThirdRowCopyright>{t.COPYRIGHT}</ThirdRowCopyright>
                </ThirdRow>
            </FooterContainer>
        </FooterStyled>
    )
}

export default Footer
