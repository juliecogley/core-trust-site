import { notFound } from "next/navigation";
import { NEWS } from "@/data/news";

type PageProps = {
params: { id: string }; // ← これだけを props の型にする
};

// ページタイトルを動的に
export function generateMetadata({ params }: PageProps) {
const item = NEWS.find(n => n.id === params.id);
return { title: item ? `${item.title} | お知らせ` : "お知らせ" };
}

// 詳細ページ本体
export default function NewsDetailPage({ params }: PageProps) {
const item = NEWS.find(n => n.id === params.id);
if (!item) return <p>記事が見つかりませんでした。</p>;

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