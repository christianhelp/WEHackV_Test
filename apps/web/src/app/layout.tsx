import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { defaultTheme } from "config";
import { neobrutalism } from '@clerk/themes'
import Script from  "next/script"
import { Inknut_Antiqua, Nunito, Junge, Julius_Sans_One} from "next/font/google";
import {Darker_Grotesque, Sriracha, Righteous} from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({ 
	variable: '--font-nunito',
	subsets: ["latin"]
  });
  const inknut = Inknut_Antiqua({
	weight:'400',
	subsets: ['devanagari'],
	variable: '--font-inknut-antiqua'
  });
  
  // Add Junge font
  const junge = Junge({
	subsets: ["latin"],
	variable: "--font-junge",
	weight: "400"
  });
  
  // Add Julius Sans One font
  const julius_sans = Julius_Sans_One({
	subsets: ["latin"],
	variable: "--font-julius-sans-one",
	weight: "400",
  });
  
  export const metadata: Metadata = {
	title: "WEHack",
	description: "WEHack 24-25 Website",
  };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = cookies().get("hk_theme")?.value || defaultTheme;
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					{/* google analytics tag */}
					<Script async src="https://www.googletagmanager.com/gtag/js?id=G-R5CQZPXHFV"></Script>
					<Script id="google analytics tag">
					{
						`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-R5CQZPXHFV');

						`
					}
					</Script>

				</head>
				<body className={`${nunito.variable} ${inknut.variable} ${junge.variable} ${julius_sans.variable}`}>
					{children}
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	);
}

export const runtime = "edge";
