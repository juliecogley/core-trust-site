// src/app/news/[id]/page.tsx
import { notFound } from "next/navigation";
import { NEWS } from "@/data/news";

// 1) 自前の最小限の型だけ
type NewsParams = { id: string };

// 2) メタデータ（必要なら）
export function generateMetadata({ params }: { params: NewsParams }) {
const item = NEWS.find(n => n.id === params.id);
return { title: item ? `${item.title}｜お知らせ` : "お知らせ" };
}

// 3) ページ本体も同じ“素の型”で受け取る
export default function NewsDetailPage({ params }: { params: NewsParams }) {
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