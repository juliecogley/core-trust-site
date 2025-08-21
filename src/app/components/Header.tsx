"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../components/Container";

export default function Header() {
const [open, setOpen] = useState(false);

// Escで閉じる／開いている間は背景スクロール禁止
useEffect(() => {
const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
document.addEventListener("keydown", onKey);
document.body.style.overflow = open ? "hidden" : "";
return () => {
document.removeEventListener("keydown", onKey);
document.body.style.overflow = "";
};
}, [open]);

const items = [
{ href: "/#about", label: "ABOUT" },
{ href: "/#services", label: "SERVICE" },
{ href: "/works", label: "WORKS" },
{ href: "/news", label: "NEWS" },
{ href: "/contact", label: "CONTACT", variant: "cta"},
];

return (
<header className="border-b border-white bg-white">
<Container className="h-16 flex items-center justify-between">
<Link href="/" className="font-semibold"> 
<span className="text-[#dda71e]">▲</span>CORE TRUST</Link>

{/* ★ 常に表示（responsiveクラスは付けない！） */}
<button
aria-label="メニューを開く"
className="inline-flex h-10 items-center rounded-md border border-white px-3"
onClick={() => setOpen(true)}
>
<svg viewBox="0 0 28 24" className="size-5 md:size-6" aria-hidden="true">
<path
d="M4 7h16M4 12h16M4 17h16 /* ← モバイル用の長さ */"
stroke="#dda71e"
strokeWidth="1.8"
strokeLinecap="round"
fill="none"
className="block md:hidden"
/>
<path
d="M4 7h20M4 12h20M4 17h20 /* ← PC用に少し長い */"
stroke="#dda71e"
strokeWidth="1.8"
strokeLinecap="round"
fill="none"
className="hidden md:block"
/>
</svg>
</button>


{open && (
<div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
{/* 背景 */}
<div className="absolute inset-0 bg-black/40 " onClick={() => setOpen(false)} />
{/* 右サイドメニュー */}
<nav
className="absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-white shadow-xl
p-6 flex flex-col gap-4"
aria-label="primary"
>
<div className="flex items-center justify-between">
<Link href="/" className="font-semibold">CORE TRUST</Link>
<button aria-label="閉じる" onClick={() => setOpen(false)} className="p-2">
<svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
<path
d="M6 6l12 12M18 6L6 18"
stroke="#dda71e" /* ×アイコンも同色 */
strokeWidth="2.2"
strokeLinecap="round"
fill="none"
/>
</svg>
</button>
</div>

<div className="mt-2 flex flex-col gap-2">
{items.map((x) => (
<Link
key={x.href}
href={x.href}
onClick={() => setOpen(false)}
className={
x.variant === "cta"
? "mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[#dda71e] text-white px-4 shadow-md hover:bg-gray-100"
: "rounded-md px-2 py-2 hover:bg-gray-100 "
}
>
{x.label}
</Link>
))}
</div>

<div className="mt-auto text-xs text-gray-500">
<Link href="/privacy">個人情報保護方針</Link><br />    
© {new Date().getFullYear()} CORE TRUST
</div>
</nav>
</div>
)}
</Container>
</header>
);
}