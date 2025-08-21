import { notFound } from "next/navigation";
import Image from "next/image";
import { WORKS } from "@/data/works";

export async function generateStaticParams() {
return WORKS.map(w => ({ id: w.id }));
}

export default function WorkDetail({ params }: { params:{ id:string } }) {
const item = WORKS.find(w => w.id === params.id);
if (!item) return notFound();

return (
<main className="mx-auto max-w-[800px] px-5 py-16 md:py-24">
<p className="text-sm text-gray-500">
{item.date ? new Date(item.date).toLocaleDateString("ja-JP") : ""}
</p>
<h1 className="mt-1 text-3xl font-semibold">{item.title}</h1>

<div className="mt-6 relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
{item.thumb ? (
<Image src={item.thumb} alt="" fill className="object-cover" sizes="800px" />
) : null}
</div>

{item.tags && item.tags.length > 0 && (
<div className="mt-4 flex flex-wrap gap-2">
{item.tags.map(t => <span key={t} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">#{t}</span>)}
</div>
)}

<article className="mt-6 leading-7 text-gray-800">
<p>{item.body}</p>
</article>
</main>
);
}