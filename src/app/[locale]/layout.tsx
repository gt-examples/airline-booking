import type { Metadata } from "next";
import { GTProvider } from "gt-next";
import { getGT, getLocale } from "gt-next/server";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  return {
    title: t("Airline Booking | General Translation"),
    description: t(
      "Search flights with internationalization powered by General Translation."
    ),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
