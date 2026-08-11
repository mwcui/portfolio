// this is where the icon for the browser tab is defined
// also where the text in the browser tab is defined

import "./globals.css";

export const metadata = {
  title: "Matthew Cui",
  description:
    "Matthew Cui — MBA candidate at Oxford, previously in finance, aerospace, entertainment, and startups.",
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
      <body>{children}</body>
    </html>
  );
}
