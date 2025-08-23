/* eslint-disable @typescript-eslint/no-explicit-any */
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
<main className="mx-auto max-w-[1200px] px-5 py-16">
<h1 className="text-2xl font-bold">{item.title}</h1>
{/* 任意の表示 */}
</main>
);
}