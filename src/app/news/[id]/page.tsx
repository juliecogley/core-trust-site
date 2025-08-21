import { notFound } from "next/navigation";
import { NEWS } from "@/data/news";

export async function generateStaticParams() {
return NEWS.map(n => ({ id: n.id }));
}

export default function NewsDetail({ params }: { params: { id: string } }) {
const item = NEWS.find(n => n.id === params.id);
if (!item) return notFound();
return (
<main className="mx-auto max-w-[800px] px-5 py-16 md:py-24">
<p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString("ja-JP")}</p>
<h1 className="mt-2 text-3xl font-semibold">{item.title}</h1>
<article className="mt-6 leading-7 text-gray-800">
<p>{item.body}</p>
</article>
</main>
);
}