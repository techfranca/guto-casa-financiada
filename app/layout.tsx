import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  preload: true,
})

export const metadata: Metadata = {
  title: "Os Segredos da Construção Financiada - Aula AO VIVO",
  description:
    "Descubra o passo a passo para conquistar sua casa própria através do financiamento da Caixa – mesmo que hoje pareça impossível.",
  generator: "v0.app",
  keywords: "casa própria, financiamento caixa, construção, minha casa minha vida, engenheiro guto",
  authors: [{ name: "Engenheiro Guto" }],
  creator: "Engenheiro Guto",
  publisher: "Os Segredos da Construção Financiada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://casa-propria-guto.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Os Segredos da Construção Financiada - Aula AO VIVO",
    description: "Descubra o passo a passo para conquistar sua casa própria através do financiamento da Caixa",
    url: "https://casa-propria-guto.vercel.app",
    siteName: "Os Segredos da Construção Financiada",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Os Segredos da Construção Financiada - Aula AO VIVO",
    description: "Descubra o passo a passo para conquistar sua casa própria através do financiamento da Caixa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://pay.hotmart.com" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5XGBF5CH');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XGBF5CH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={<div className="min-h-screen bg-slate-900 animate-pulse" />}>{children}</Suspense>
      </body>
    </html>
  )
}
