// this is where the icon for the browser tab is defined
// also where the text in the browser tab is defined

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mwcui",
  description: "Matthew's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/BrowserIcon/favicon.ico" sizes="any" />
        <link rel="icon" href="/BrowserIcon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/BrowserIcon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/BrowserIcon/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
