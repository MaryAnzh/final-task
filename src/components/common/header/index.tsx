import React from 'react';

import { AnimationButton } from './animationButton/styled';
import { HeaderStyled } from './styled';
import Link from 'next/link';
import { LoginWrap } from '@/components/simple/login';
import { LogoSVG } from '@/components/simple/logoSVG';
import Nav from '@/components/smart/nav';


type HeaderProps = { className: string };

const Header = (props: HeaderProps) => {
    const navList = ['about', 'contacts'];
    return (
        <HeaderStyled className={props.className}>
            <div className='header__wrapper'>
                <div className='header__wrapper__left'>
                    <Link href='/'>
                        <LogoSVG />
                    </Link>
                    <Nav navList={navList} />
                </div>

                <div className='header__wrapper__right'>
                    <AnimationButton>Click</AnimationButton>
                    <LoginWrap />
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;