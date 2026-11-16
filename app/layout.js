import './globals.css';

export const metadata = {
  title: 'Mondo — food that finds you',
  description: 'Premium food delivery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}