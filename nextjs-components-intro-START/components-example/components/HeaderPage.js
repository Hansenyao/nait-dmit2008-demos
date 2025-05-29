import Link from "next/link";
import React from "react";

export default function HeaderPage(props) {
    return (
    <div style={{backgroudColor:props.color}}>
        <h1>{props.children}</h1>
        <div><Link href="/">Home</Link> - <Link href="/about">About</Link> - <Link href="/contact">Contact</Link></div>
    </div>);
}
