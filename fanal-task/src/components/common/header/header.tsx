import React from "react";
import Link from "next/link";

type HeaderProps = {}

export default function Header(props: HeaderProps) {

    return (
        <header>
            <Link href='/'>About</Link>
            <Link href='/contacts'>Contacts</Link>
            <Link href='/auth'>Auth</Link>
        </header>
    );
}