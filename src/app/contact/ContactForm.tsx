"use client";
import { useState } from "react";

export default function ContactForm() {
const [sending, setSending] = useState(false);
const [error, setError] = useState<string | null>(null);

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setError(null);
setSending(true);

const form = new FormData(e.currentTarget);
const payload = {
name: form.get("name"),
email: form.get("email"),
message: form.get("message"),
honey: (form.get("company") as string) || "",
};

try {
const res = await fetch("/api/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(payload),
});
if (!res.ok) throw new Error("送信に失敗しました");
window.location.href = "/contact/thanks";
} catch (err: any) {
setError(err.message || "エラーが発生しました");
} finally {
setSending(false);
}
}

return (
<form className="mt-8 grid gap-4" onSubmit={onSubmit}>
<input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
<label className="grid gap-1">
<span className="text-sm">お名前</span>
<input name="name" className="h-11 rounded-md border px-3" required />
</label>
<label className="grid gap-1">
<span className="text-sm">メールアドレス</span>
<input name="email" type="email" className="h-11 rounded-md border px-3" required />
</label>
<label className="grid gap-1">
<span className="text-sm">お問い合わせ内容</span>
<textarea name="message" className="min-h-40 rounded-md border p-3" required />
</label>
{error && <p className="text-sm text-red-600">{error}</p>}
<button
disabled={sending}
className="mt-2 inline-flex h-11 items-center justify-center rounded-md px-6 text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-60"
>
{sending ? "送信中…" : "送信する"}
</button>
</form>
);
}