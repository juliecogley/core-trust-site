// src/app/news/[id]/page.tsx
import { notFound } from "next/navigation";
import { NEWS } from "@/data/news";

// ---- まずはデプロイ優先。型は any で受ける ----
type IdParams = { id: string };

export function generateMetadata(props: any) {
const { params } = props as { params: IdParams };
const item = NEWS.find(n => n.id === params.id);
return { title: item ? `${item.title}｜お知らせ` : "お知らせ" };
}

export default function NewsDetailPage(props: any) {
const { params } = props as { params: IdParams };
const item = NEWS.find(n => n.id === params.id);
if (!item) return notFound();

return (
<main className="mx-auto max-w-[1200px] px-5 py-16">
<h1 className="text-2xl font-bold">{item.title}</h1>
<p className="mt-2 text-sm text-gray-500">
{new Date(item.date).toLocaleDateString("ja-JP")}
</p>
<div className="mt-8 whitespace-pre-wrap">{item.body}</div>
</main>
);
}