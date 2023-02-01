import React from "react";
import Nav from "@/components/smart/nav";
import { HeaderStyled } from "./styled";
import Image from 'next/image'

type HeaderProps = { className: string };

const Header = (props: HeaderProps) => {
    const navList = ['about', 'contacts', 'authorization'];
    return (
        <HeaderStyled className={props.className}>
            <Image
                className="logo-svg"
                src="/logo.svg"
                alt="Team Logo"
                width={59*1.5}
                height={18*1.5}
                priority
            />
            <Nav navList={navList} />
        </HeaderStyled>
    );

}

export default Header;