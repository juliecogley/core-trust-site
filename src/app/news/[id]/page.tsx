// src/app/news/[id]/page.tsx
import { notFound } from "next/navigation";
import { NEWS } from "@/data/news";

// ここで自前の型だけを宣言（PageProps は使わない）
type NewsPageParams = { id: string };
type NewsPageProps = { params: NewsPageParams };

// ページタイトル用
export function generateMetadata({ params }: NewsPageProps) {
const item = NEWS.find((n) => n.id === params.id);
return { title: item ? `${item.title}｜お知らせ` : "お知らせ" };
}

// 詳細ページ本体
export default function NewsDetailPage({ params }: NewsPageProps) {
const item = NEWS.find((n) => n.id === params.id);
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