import Link from "next/link";
import Image from "next/image";
import WorkCard from "@/app/components/WorkCard";
import { WORKS } from "@/data/works";
import { NEWS } from "@/data/news";
import Container from "./components/Container";


function SectionTitle({eyebrow, title}:{eyebrow:string; title:string}) {
 return (
 <div>
 <p className="text-xs uppercase tracking-widest text-gray-500">{eyebrow}</p>
 <h2 className="mt-2 text-[clamp(22px,4.5vw,32px)] font-semibold">{title}</h2>
 </div>
 );
}

export default function Home() {
 return (
 <main>

 {/* TOP */}
<section className="relative w-full h-[600px] bg-cover bg-center" 
style={{ backgroundImage: "url('/header/header-bg.jpeg')" }}>

{/* 背景画像 */}
<div className="relative w-full h-[600px] bg-cover bg-center">
<img
src="/header/header-bg.jpeg" 
alt=""
className="absolute inset-0 h-full w-full object-cover"
/>
{/* 黒グラデで読みやすく */}
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/20" />
</div>

<div className="absolute inset-0 flex items-center">
<Container>
<h1 className="text-white font-bold leading-loose text-[48px] sm:text-[56px] md:text-[68px] lg:text-[84px]">
SPEED,<br />
QUALITY,<br />
LASTING SUPPORT.
</h1>
</Container>
</div>
</section>

 {/* 企業情報*/}
 <section id="about">
 <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
<div className="grid md:grid-cols-2 items-center gap-12">   
{/* 左テキスト*/}
<div>
<h2 className="text-4xl font-bold mb-2 text-[#dda71e]">ABOUT</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#dda71e]">企業情報</p>
<h3 className="mt-5 text-xl font-semibold leading-relaxed">
スピード・品質・伴走支援、<br/>“3つのコア”を持つ会社。
</h3>
<p className="mt-4 text-gray-600 leading-7">
私たちはスピード・品質・伴走支援を強みにしたweb制作会社です。限られたスケジュールでも、
一貫性のある品質を実現し、導入後も継続的な運用サポートでお客様を支えます。
</p>
{/* ボタン*/}
<div className="mt-6 flex gap-3">
    
<Link href="/about" className="px-5 py-2.5 rounded-md border-2 border-gray-400 shadow-md"><p className="text-gray-600">詳細はこちら →</p></Link>
</div>

</div>
{/* 右画像*/}
<div className="rounded-xl overflow-hidden border border-gray-200">
<img src="/about/office.jpeg" alt="オフィス風景" className="w-full h-full object-cover" />
</div>
</div>
 </div>
 </section>

{/* 事業内容*/}
<section id="services" className="bg-[#4B4843] text-white py-16">
<div className="max-w-[1200px] mx-auto px-5">

{/* タイトル */}
<h2 className="text-4xl font-bold mb-2 text-[#ffffff]">SERVICE</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#ffffff]">事業内容</p>

{/* 3カラムカード */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/* カード1 */}
<div className="bg-[#4B4843]">
<div className="rounded-xl overflow-hidden mb-3">
<img src="/service/service1.jpeg" alt="Web制作" className="w-full h-48 object-cover" />
</div>
<h3 className="font-semibold text-lg">Web制作</h3>
<p className="text-sm text-gray-200">企業サイト・LP・採用サイト等、企画から制作まで一貫対応。</p>
</div>

{/* カード2 */}
<div className="bg-[#4B4843]">
<div className="rounded-xl overflow-hidden mb-3">
<img src="/service/service2.jpeg" alt="運用・改善" className="w-full h-48 object-cover" />
</div>
<h3 className="font-semibold text-lg">運用・改善</h3>
<p className="text-sm text-gray-200">公開後の更新やABテスト、分析〜改善提案まで伴走支援。</p>
</div>

{/* カード3 */}
<div className="bg-[#4B4843]">
<div className="rounded-xl overflow-hidden mb-3">
<img src="/service/service3.jpeg" alt="ブランディング" className="w-full h-48 object-cover" />
</div>
<h3 className="font-semibold text-lg">ブランディング</h3>
<p className="text-sm text-gray-200">ロゴ、トーン＆マナー設計など一貫した表現づくり。</p>
</div>
</div>
</div>

</section>

{/* ワイド画像 */}
<div className="w-full">
<img src="/service/fullwidth.jpeg" 
alt="オフィス全体イメージ" 
className="w-full h-[400px] object-cover block" />
</div>

 {/* 制作実績 */}
<section>
<div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
<h2 className="text-4xl font-bold mb-2 text-[#dda71e]">WORKS</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#dda71e]">制作実績</p>
<div className="mt-8 grid gap-6 md:grid-cols-3">
{WORKS.slice(0,3).map(w => (
<WorkCard key={w.id} href={`/works/${w.id}`} title={w.title} thumb={w.thumb} tags={w.tags} />
))}
</div>
<div className="mt-8">
<Link href="/works" className="inline-flex px-5 py-2.5 rounded-md border-2 border-gray-400 shadow-md"><p className="text-gray-600">その他実績はこちら →</p></Link>
</div>
</div>
</section>

{/* お知らせ */}
<section>
<div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
<h2 className="text-4xl font-bold mb-2 text-[#dda71e]">NEWS</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#dda71e]">お知らせ</p>
{NEWS.length === 0 ? (
<p className="mt-6 text-gray-600">現在お知らせはありません。</p>
) : (
<ul className="mt-8 space-y-4">
{[...NEWS]
.sort((a, b) => (a.date < b.date ? 1 : -1))
.slice(0, 3)
.map((n) => (
<li key={n.id} className="grid gap-2 border-b border-gray-200 pb-4 md:grid-cols-[120px_1fr]">
<time className="text-sm text-gray-500">
{new Date(n.date).toLocaleDateString("ja-JP")}
</time>
<Link href={`/news/${n.id}`} className="block hover:opacity-80">
<span className="font-medium">{n.title}</span>
{n.category && (
<span className="ml-3 text-xs text-gray-500">#{n.category}</span>
)}
</Link>
</li>
))}
</ul>
)}

<div className="mt-8">
<Link href="/news" className="inline-flex px-5 py-2.5 rounded-md border-2 border-gray-400 shadow-md"><p className="text-gray-600">詳細はこちら →</p></Link>
</div>
</div>
</section>

 {/* CONTACT CTA */}
<section id="contact-cta" className="relative overflow-hidden">
{/* 背景画像 */}
<div className="relative h-[320px] md:h-[420px]">
<img
src="/contact/cta.jpeg" // ← public/contact/cta.jpg
alt=""
className="absolute inset-0 h-full w-full object-cover"
/>
{/* 黒グラデで読みやすく */}
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/20" />
</div>

{/* テキスト＆ボタン（左寄せ・中央寄せ） */}
<div className="pointer-events-none absolute inset-0">
<div className="mx-auto max-w-[1200px] h-full px-5">
<div className="h-full flex items-center">
<div className="pointer-events-auto">

<h2 className="text-4xl font-bold mb-2 text-[#ffffff]">CONTACT</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#ffffff]">お問い合わせ</p>
<p className="mt-3 text-white/90 md:text-base leading-7 max-w-[40ch]">
課題やゴールを伺い、最適なプランをご提案します。まずはお気軽にご相談ください。
</p>
<Link href="/contact" className="mt-6 inline-flex h-11 items-center rounded-md px-5
bg-[#dda71e] text-white hover:bg-[#c79118] shadow-md">
お問い合わせはこちら →
</Link>
</div>
</div>
</div>
</div>
</section>
 </main>
 );
}