import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-providor";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "VeeSurve Enterprises",
	description: "Event Managment| Travel| Holidays",
	icons: [
		{
			url: "/logo.png",
			href: "/logo.png",
		},
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ConvexClientProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
						storageKey="veesurveEnt"
					>
						{children}
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
