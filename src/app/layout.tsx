import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header/Header";
import Provider from "@/components/common/Provider";

const pretendard = localFont({
    src: "./fonts/Pretendard-Regular.woff2",
});

export const metadata: Metadata = {
    title: "009",
    description: "Project 009",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="ko">
            <body className={`${pretendard.className}`}>
                <Provider attribute="class" defaultTheme="system" enableSystem>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
