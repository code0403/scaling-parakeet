import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "EMI Shop",
  description: "Buy mobiles with flexible EMI plans backed by mutual funds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
        <Providers>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
