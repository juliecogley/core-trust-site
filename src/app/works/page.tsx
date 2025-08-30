import { WORKS } from "@/data/works";
import WorkCard from "@/app/components/WorkCard";

export const metadata = { title: "実績 | 会社名" };

export default function WorksPage() {
const items = [...WORKS]; // 並び替えたい場合はここで
return (
<main className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">

<h2 className="text-4xl font-bold mb-2 text-[#dda71e]">WORKS</h2>
<p className="text-sm mb-8 uppercase tracking-widest text-[#dda71e]">制作実績</p>
<div className="mt-8 grid gap-6 md:grid-cols-3">
{items.map(w => (
<WorkCard key={w.id} href={`/works/${w.id}`} title={w.title} thumb={w.thumb} tags={w.tags} />
))}
</div>
</main>
);
}