// src/data/news.ts
export type News = { id: string; title: string; date: string; body: string; category?: string };

export const NEWS: News[] = [
 { id:"recruit", title:"採用募集を終了しました", date:"2025-10-01", body:"本文が入ります。" },
 { id:"office", title:"本社を移転しました", date:"2025-09-01", body:"本文が入ります。" },
 { id:"service", title:"サービスページを更新しました", date:"2025-08-10", body:"本文が入ります。"},
 { id:"welcome", title:"コーポレートサイトを公開しました", date:"2025-08-01", body:"本文が入ります。" }, 
];