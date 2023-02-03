import React from 'react';
import { NavStyled } from './styled';
import Link from 'next/link';

type NavProps = {
    navList: string[]
}

export default function Nav(props: NavProps) {
    const navList = props.navList.map(name => {
        const href = name === 'about' ? '/' : `/${name}`;
        return (
            <li
            className='nav-item'
            key={name}>
                <Link
                className='nav-item__link'
                href={href}>{name}</Link>
            </li>
        );
    });
    
    return (
        <NavStyled>
            {navList}
        </NavStyled>
    );
}