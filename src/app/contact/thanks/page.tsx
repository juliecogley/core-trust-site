// src/app/contact/thanks/page.tsx
export const metadata = { title: "送信完了 | 会社名" };

export default function ThanksPage() {
return (
<main className="mx-auto max-w-[800px] px-5 py-16 md:py-24">
<h1 className="text-3xl font-semibold">送信ありがとうございました</h1>
<p className="mt-4 text-gray-700">
担当者より順次ご連絡いたします。2〜3営業日経っても返信がない場合は、お手数ですが再度ご連絡ください。
</p>
</main>
);
}