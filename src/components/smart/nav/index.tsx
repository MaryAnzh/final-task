import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en'
import { ru } from '../../../data/locales/ru'

import { navList } from '@/data/constants/navList';
import { RoutingEnum } from '@/data/constants/routing';
import { NavStyled } from './styled';

export function Nav() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    const list = navList.map(name => {
        const href = name === 'about' ? RoutingEnum.about : RoutingEnum.contacts;
        const trName = name === 'about' ? t.ABOUT: t.CONTACTS;

        return (
            <li
                className='nav-item'
                key={name}>
                <Link
                    className='nav-item__link'
                    href={href}>{trName}</Link>
            </li>
        );
    });

    return (
        <NavStyled>
            { list }
        </NavStyled>
    );
}