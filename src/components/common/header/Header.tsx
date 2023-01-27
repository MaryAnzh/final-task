import React from 'react'
import { Link } from 'react-router-dom';

type HeaderType = {
    navList: string[],
}

export const Header = (props: HeaderType): JSX.Element => {
    const navList = props.navList;
    const navListJSX = navList.map(el => {
        return (
            <li key={el}>
                <Link to={el === 'about' ? '/' : '/' + el}>
                    {el}
                </Link>
            </li>
        );
    });

    return (
        <div>
            <nav>
                {navListJSX}
            </nav>
        </div>
    )
}