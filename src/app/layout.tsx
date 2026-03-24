import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Generate\u2013Verify\u2013Select: Evolutionary Fitness Shaping for Safe Clinical Text Generation",
	description: "Research paper microsite for Generate\u2013Verify\u2013Select and safe clinical text generation.",
	applicationName: "Generate\u2013Verify\u2013Select",
	manifest: "/site.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
		shortcut: ["/favicon.ico"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head />
			<body className={`${inter.className} ${inter.variable} antialiased`}>
				<CustomCursor />
				{children}
			</body>
		</html>
	);
}
