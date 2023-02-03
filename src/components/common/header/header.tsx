import React from "react";
import Nav from "@/components/smart/nav/nav";
import { useStore } from "@/context";


type HeaderProps = {}

export default function Header(props: HeaderProps) {
    const [status] = useStore();
    // console.log(status);
    const navList = ['about', 'contacts', 'authorization'];
    return (
        <header>
            <Nav navList={navList} />
        </header>
    );
}