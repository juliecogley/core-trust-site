import Link from "next/link";
import { NEWS } from "@/data/news";

export const metadata = { title: "お知らせ | 会社名" };

export default function NewsPage() {
const items = [...NEWS].sort((a,b)=> (a.date < b.date ? 1 : -1));
return (
<main className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
<h1 className="text-3xl font-semibold">お知らせ</h1>
<ul className="mt-8 space-y-4">
{items.map(n=>(
<li key={n.id} className="grid gap-2 border-b pb-4 md:grid-cols-[120px_1fr]">
<time className="text-sm text-gray-500">
{new Date(n.date).toLocaleDateString("ja-JP")}
</time>
<Link href={`/news/${n.id}`} className="block hover:opacity-80">
<span className="font-medium">{n.title}</span>
{n.category && <span className="ml-3 text-xs text-gray-500">#{n.category}</span>}
</Link>
</li>
))}
</ul>
</main>
);
}