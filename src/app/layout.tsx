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
title: "会社公式サイト",
description: "会社のWebサイトのポートフォリオです。",
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