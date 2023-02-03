import React from 'react';
import Link from 'next/link';
import { navList } from '@/data/constants/navList';
import { NavStyled } from './styled';

export function Nav() {
    const list = navList.map(name => {
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
            { list }
        </NavStyled>
    );
}