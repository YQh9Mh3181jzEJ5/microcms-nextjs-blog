import { ThemeProvider } from "@/app/components/providers/theme-provider";
import "@/app/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { M_PLUS_1 } from "next/font/google";

const mPlus1 = M_PLUS_1({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-m-plus-1",
});

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "WaltzTech",
  description: "Web engineer waltz's site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${mPlus1.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
