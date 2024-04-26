import "./globals.css";

export const metadata = {
  title: "Water Please",
  description: "내가 언제 물을 줬더라...?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
