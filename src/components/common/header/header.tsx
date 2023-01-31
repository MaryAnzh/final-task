import React from "react";
import Nav from "@/components/smart/nav/nav";
import { HeaderStyled } from "./styled";

type HeaderProps = {}

export default function Header(props: HeaderProps) {
    const navList = ['about', 'contacts', 'auth'];
    return (
        <HeaderStyled>
            <header>
                <Nav navList={navList} />
            </header>
        </HeaderStyled>

    );
}