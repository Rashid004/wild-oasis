/** @format */

import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased flex flex-col bg-primary-950 text-primary-50 min-h-screen relative`}
      >
        <Header />
        <div className="flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer className="py-4 text-center text-sm text-primary-400">
          &copy; {new Date().getFullYear()} The Wild Oasis. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
