import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "お問い合わせ | 会社名" };

export default function ContactPage() {
return (
<main className="mx-auto max-w-[800px] px-5 py-16 md:py-24">
<h1 className="text-3xl font-semibold">お問い合わせ</h1>
<ContactForm />
</main>
);
}