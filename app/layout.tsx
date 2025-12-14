import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Studios PDR | Mobile Paintless Dent Repair | Treasure Valley",
  description: "Mobile paintless dent repair serving Meridian, Boise, Eagle, Nampa, Star, and Kuna. We come to you. Original paint stays. Get a free quote.",
  keywords: "paintless dent repair, PDR, mobile dent repair, Meridian, Boise, Eagle, Nampa, Treasure Valley, Idaho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://plausible.io/js/pa-29J3e6kwK_nOp4k1xMhii.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
