import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sorting Hat App",
  description: "App to sort you in to a Hogwarts House",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4 columns-2`}
      >
        {children}
      </body>
    </html>
  );
}
