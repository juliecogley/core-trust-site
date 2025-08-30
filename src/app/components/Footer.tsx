import Link from "next/link";
import Image from "next/image";


export default function Footer() {
return (
<footer className="bg-[#4B4843] text-white">
<div className="mx-auto max-w-[1200px] px-5 py-10">
{/* 上段：左（ロゴ+住所） / 右（ナビ） */}
<div className="md:flex md:items-start md:justify-between gap-8">
{/* 左カラム：ロゴ→会社名→住所（PCでもこの順で縦積み） */}
<div className="md:max-w-[60%]">
<Link href="/" aria-label="CORE TRUST Home" className="flex items-center gap-2">
<Image
src="/logo-coretrust2.svg" // public 配下はルートからのパスでOK
alt="CORE TRUST"
width={160} // 実寸に合わせて調整
height={40}
priority // ファーストビューなので優先読み込み
className="h-8 w-auto md:h-10" // 画面幅で少し大きく/>
/>
</Link>
<p className="mt-1 text-sm">コアトラスト株式会社</p>

<div className="mt-4 space-y-1 text-sm">
<p>〒000-0000</p>
<p>東京都〇〇区〇〇 0-0-0</p>
<p>〇〇ビル　4F</p>
<p className="mt-2">TEL 03-0000-0000</p>
</div>
</div>

{/* 右カラム：ナビ（PCで右寄せ） */}
<nav className="mt-6 md:mt-0 md:min-w-[40%]">
<ul className="flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-sm">
<li><Link href="/#about" className="hover:text-[#dda71e]">ABOUT</Link></li>
<li><Link href="/#services" className="hover:text-[#dda71e]">SERVICE</Link></li>
<li><Link href="/works" className="hover:text-[#dda71e]">WORKS</Link></li>
<li><Link href="/news" className="hover:text-[#dda71e]">NEWS</Link></li>
<li><Link href="/contact" className="hover:text-[#dda71e]">CONTACT</Link></li>
</ul>
</nav>
</div>

{/* 仕切り線＋著作権 */}
<div className="mt-8 border-t border-white/20 pt-4 text-xs flex items-center justify-between text-white/80">
<p>©2025 Core Trust Company.</p>
<Link href="/privacy" className="hover:text-[#dda71e]">個人情報保護方針</Link>
</div>
</div>
</footer>
);
}