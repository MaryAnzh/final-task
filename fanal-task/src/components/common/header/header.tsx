import React from "react";
import Link from "next/link";
import Nav from "@/components/smart/nav/nav";

type HeaderProps = {}

export default function Header(props: HeaderProps) {
    const navList = ['about', 'contacts', 'auth'];
    return (
        <header>
            <Nav navList={navList} />
        </header>
    );
}