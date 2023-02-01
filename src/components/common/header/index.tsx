import { FC } from "react";
import React from "react";
import Nav from "@/components/smart/nav";
import { HeaderStyled } from "./styled";

type HeaderProps = { className: string };

const Header = (props: HeaderProps) => {
    const navList = ['about', 'contacts', 'authorization'];
    return (
        <HeaderStyled className={props.className}>
            <Nav navList={navList} />
        </HeaderStyled>
    );

}

export default Header;