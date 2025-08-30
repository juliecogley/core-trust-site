// ===== フォント =====
import { Noto_Sans_JP, Poppins } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
subsets: ["latin"],
weight: ["400", "500", "700"],
variable: "--font-noto-sans-jp",
});

const poppins = Poppins({
subsets: ["latin"],
weight: ["400", "600"],
variable: "--font-poppins",
});

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
title: "CORE TRUST",
description: "Speed, Quality, Lasting Support",
icons: {
icon: "/favicon.svg", // ここで指定
},

openGraph: {
title: "CORE TRUST",
description: "Speed, Quality, Lasting Support",
url: "https://core-trust-site.vercel.app", // デプロイ先URL
siteName: "CORE TRUST",
images: [
{
url: "/ogp.png", // public配下に置いた画像のパス
width: 1200,
height: 630,
},
],
locale: "ja_JP",
type: "website",
},
twitter: {
card: "summary_large_image",
title: "CORE TRUST",
description: "Speed, Quality, Lasting Support",
images: ["/ogp.png"],
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ja">
<body className={`${notoSansJP.variable} ${poppins.variable} antialiased text-gray-900`}>
<Header />
{children}
<Footer />
</body>
</html>
);
}