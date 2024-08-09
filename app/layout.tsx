import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex text-xl justify-evenly border-b p-4 bg-slate-100">
          <div>Home</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
