import "./globals.css"; // ✅ Import Tailwind styles

export const metadata = {
  title: "SmartFlow Tools",
  description: "Tools that make your workflow smarter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
