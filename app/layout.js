/** @format */

import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>copyright by Wild oasis</footer>
      </body>
    </html>
  );
}
