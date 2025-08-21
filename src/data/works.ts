// src/data/works.ts
export type Work = {
id: string;
title: string;
thumb: string; // 例: "/works/w1.jpg"（public配下）
tags?: string[];
body: string; // 詳細本文
date?: string;
};

export const WORKS: Work[] = [
{
id: "proj-a",
title: "企業サイト刷新 A社",
thumb: "/works/w1.jpeg",
tags: ["Web制作", "コーポレート"],
body: "A社様の企業サイトを全面刷新。情報設計から実装、運用まで担当。",
date: "2025-06-10",
},
{
id: "proj-b",
title: "採用LP制作 B社",
thumb: "/works/w2.jpeg",
tags: ["LP", "採用"],
body: "採用強化に向けたランディングページを制作。応募率の改善に寄与。",
date: "2025-05-20",
},
{
id: "proj-c",
title: "ブランドサイト C社",
thumb: "/works/w3.jpeg",
tags: ["ブランド", "CMS"],
body: "CMS連携したブランドサイト。編集フローを最適化。",
date: "2025-04-02",
},

{
id: "proj-d",
title: "ブランドサイト D社",
thumb: "/works/w4.jpeg",
tags: ["ブランド", "CMS"],
body: "CMS連携したブランドサイト。編集フローを最適化。",
date: "2025-03-10",
},
];