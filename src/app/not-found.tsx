"use client"
// import ThemeProvider from "@/shared/lib/Providers"
import Link from "next/link";
export default function LocaleLayout() {
  return (
    <html>
      <title>404. Page not found</title>
      <body>
        {/* <ThemeProvider> */}
          <div>
            <h1>404 - Page not found</h1>
            <Link href={'/'}>Main page</Link>
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}