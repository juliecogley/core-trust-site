export const metadata = { title: "企業情報 | 会社名" };
export default function CompanyPage() {
return (
<main className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
<h1 className="text-3xl font-semibold">企業情報</h1>
<dl className="mt-8 grid gap-4 md:grid-cols-2">
<div><dt className="text-sm text-gray-500">会社名</dt><dd className="font-medium">会社名株式会社</dd></div>
<div><dt className="text-sm text-gray-500">所在地</dt><dd className="font-medium">東京都〇〇区〇〇 0-0-0</dd></div>
<div><dt className="text-sm text-gray-500">設立</dt><dd className="font-medium">2020年1月</dd></div>
<div><dt className="text-sm text-gray-500">代表</dt><dd className="font-medium">山田 太郎</dd></div>
</dl>
</main>
);
}