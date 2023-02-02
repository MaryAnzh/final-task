import React from "react";
import Nav from "@/components/smart/nav";
import { HeaderStyled } from "./styled";
import { LogoSVG } from "@/components/simple/logoSVG";

type HeaderProps = { className: string };

const Header = (props: HeaderProps) => {
    const navList = ['about', 'contacts', 'authorization'];
    return (
        <HeaderStyled className={props.className}>
            <LogoSVG />
            <Nav navList={navList} />
        </HeaderStyled>
    );

}

export default Header;