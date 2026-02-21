import type { Metadata } from "next";
import { GTProvider } from "gt-next";
import { getGT, getLocale } from "gt-next/server";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT();
  const locale = await getLocale();
  return {
    title: gt("Airline Booking | General Translation"),
    description: gt(
      "Search flights with internationalization powered by General Translation."
    ),
    openGraph: {
      title: gt("Airline Booking | General Translation"),
      description: gt(
        "Search flights with internationalization powered by General Translation."
      ),
      locale,
      type: "website",
      url: `https://airline-booking.generaltranslation.dev/${locale}`,
    },
    alternates: {
      canonical: `https://airline-booking.generaltranslation.dev/${locale}`,
      languages: {
        en: "https://airline-booking.generaltranslation.dev/en",
        es: "https://airline-booking.generaltranslation.dev/es",
        fr: "https://airline-booking.generaltranslation.dev/fr",
        ja: "https://airline-booking.generaltranslation.dev/ja",
        zh: "https://airline-booking.generaltranslation.dev/zh",
      },
    },
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
