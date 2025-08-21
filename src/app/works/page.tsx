import { WORKS } from "@/data/works";
import WorkCard from "@/app/components/WorkCard";

export const metadata = { title: "実績 | 会社名" };

export default function WorksPage() {
const items = [...WORKS]; // 並び替えたい場合はここで
return (
<main className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">

<p className="text-xs uppercase tracking-widest text-gray-500">制作実績</p>
<h2 className="mt-2 text-[clamp(22px,4.5vw,32px)] font-semibold">WORKS</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">
{items.map(w => (
<WorkCard key={w.id} href={`/works/${w.id}`} title={w.title} thumb={w.thumb} tags={w.tags} />
))}
</div>
</main>
);
}