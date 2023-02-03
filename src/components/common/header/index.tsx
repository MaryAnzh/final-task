import React from 'react';
import Link from 'next/link';

import { RoutingEnum } from '@/data/constants/routing';
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


export const Header = () => {

    return (
        <HeaderStyled>
            <HeaderWrap>
                <LeftHeaderWrap>
                    <Link href={RoutingEnum.about}>
                        <LogoSVG />
                    </Link>
                    <Nav />
                </LeftHeaderWrap>
                <div>
                    <Link href="/" locale="en">
                        En
                    </Link>

                    <Link href="/" locale="ru">
                        ru
                    </Link>
                </div>
                <RightHeaderWrap>
                    <AnimationButton>Click</AnimationButton>
                    <LoginWrap />
                </RightHeaderWrap>
            </HeaderWrap>
        </HeaderStyled>
    );
}
