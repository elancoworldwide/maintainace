import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÉLAN & CO. | Under Maintenance",
  description:
    "ÉLAN & CO. — European Certified Company. Our website is currently under maintenance. We'll be back online soon.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-[#142045] min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
