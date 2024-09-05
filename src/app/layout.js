import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mwcui",
  description: "Matthew's Portfolio",
  icons: {
    icon: '/browsericon.svg',
    apple: '/browsericon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/browsericon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/browsericon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
