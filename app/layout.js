/** @format */

import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-50 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>copyright by Wild oasis</footer>
      </body>
    </html>
  );
}
