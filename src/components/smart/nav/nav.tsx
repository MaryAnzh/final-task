import React from "react";
import Link from "next/link";

type NavProps = {
    navList: string[]
}

export default function Nav(props: NavProps) {
    const navList = props.navList.map(name => {
        const href = name === 'about' ? '/' : `/${name}`;
        return (
            <li key={name}>
                <Link href={href}>{name}</Link>
            </li>
        );
    });
    
    return (
        <nav>
            {navList}
        </nav>
    );
}