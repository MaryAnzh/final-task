import React from 'react';
import Link from 'next/link';
import { LoginWrap } from '@/components/simple/login';
import { LogoSVG } from '@/components/simple/logoSVG';
import { Nav } from '@/components/smart/nav';
import { AnimationButton } from './animationButton/styled';
import {
    HeaderStyled,
    HeaderWrap,
    LeftHeaderWrap,
    RightHeaderWrap
} from './styled';


const Header = () => {
    return (
        <HeaderStyled>
            <HeaderWrap>
                <LeftHeaderWrap>
                    <Link href='/'>
                        <LogoSVG />
                    </Link>
                    <Nav />
                </LeftHeaderWrap>

                <RightHeaderWrap>
                    <AnimationButton>Click</AnimationButton>
                    <LoginWrap />
                </RightHeaderWrap>
            </HeaderWrap>
        </HeaderStyled>
    );
}

export default Header;