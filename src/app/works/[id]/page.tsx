/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { notFound } from "next/navigation";
import { WORKS } from "@/data/works"; // ←あなたのデータに合わせて

type Params = Promise<{ id: string }>;

export async function generateMetadata(
{ params }: { params: Params }
) {
const { id } = await params;
const item = WORKS.find((w) => w.id === id);
return { title: item ? `${item.title} | WORKS` : "WORKS" };
}

export default async function WorkDetailPage(
{ params }: { params: Params }
) {
const { id } = await params;
const item = WORKS.find((w) => w.id === id);
if (!item) return notFound();

return (
<main className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
<h2 className="text-4xl font-bold mb-2 text-[#dda71e]">WORKS</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#dda71e]">制作実績</p>

{/* ここが肝。fill か width/height を必ず指定 */}
<div className="relative w-full h-[420px]">
<Image
src={item.thumb} // 例: "/works/proj-a/hero.jpg"
alt={item.title}
fill
className="object-cover rounded-lg"
sizes="(min-width:1024px) 1200px, 100vw"
priority
/>
</div>

{item.body && <div className="prose mt-8 max-w-none">{item.body}</div>}

</main>
);
}

