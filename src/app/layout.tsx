import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { ThemeProvider } from "@/Context/ThemeContext";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "NexGen Solutions It",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
