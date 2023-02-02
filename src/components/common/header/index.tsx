import React from "react";
import Nav from "@/components/smart/nav";
import { HeaderStyled } from "./styled";
import { LogoSVG } from "@/components/simple/logoSVG";
import { LoginWrap } from "@/components/simple/login";
import { AnimationButton } from "./animationButton/styled";
import Link from "next/link";

type HeaderProps = { className: string };

const Header = (props: HeaderProps) => {
    const navList = ['about', 'contacts'];
    return (
        <HeaderStyled className={props.className}>
            <div className="header__wrapper">
                <div className="header__wrapper__left">
                    <Link href='/'>
                        <LogoSVG />
                    </Link>
                    <Nav navList={navList} />
                </div>

                <div className="header__wrapper__right">
                    <AnimationButton>Click</AnimationButton>
                    <LoginWrap />
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;