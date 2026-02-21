import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/navbar";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Whispers Archive",
    template: "%s | Whispers Archive",
  },
  description: "An archive of mature horror stories and maniacal phantoms. Browse if you dare.",
  keywords: [
    "Whispers Archive",
    "short stories",
    "Horror fiction",
    "dark fantasy",
    "cosmic horror",
    "surrealism",
  ],
  metadataBase: new URL("https://whispersarchive.com"),
  openGraph: {
    title: "Whispers Archive",
    description: "An archive of mature horror stories and maniacal phantoms. Browse if you dare.",
    url: "https://whispersarchive.com",
    siteName: "Whispers Archive",
    type: "website",
    images: [
      {
        url: "/assets/icontemp.png",
        width: 1200,
        height: 630,
        alt: "The crazed soul eater of Whispers Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whispers Archive",
    description: "Enter a hall of forgotten tales and narrative relics.",
    creator: "Cutoffdragon",
    images: ["/assets/icontemp.png"],
  },
  icons: {
    icon: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    apple: "/assets/icontemp.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://whispersarchive.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sankofa+Display&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} antialiased `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
