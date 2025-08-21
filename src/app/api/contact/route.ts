// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
const body = await req.json().catch(() => null);

// 簡易バリデーション
if (!body || !body.name || !body.email || !body.message) {
return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
}
// スパム（bot）が埋めがちな隠しフィールド
if (body.honey) {
return NextResponse.json({ ok: true }); // 何もせずOK返す
}

// ★ ここでメール送信や外部サービス連携に差し替える（後で）
// 例：SendGrid, Resend, Slack通知 など

console.log("[CONTACT]", body); // 今はサーバーのログに出すだけ
return NextResponse.json({ ok: true });
}