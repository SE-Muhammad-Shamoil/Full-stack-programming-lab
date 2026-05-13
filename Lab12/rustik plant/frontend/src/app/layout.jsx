import "./globals.css";

export const metadata = {
  title: "Rustik Plank Furniture",
  description: "Dynamic ecommerce furniture store inspired by the Rustik Plank mockup."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
