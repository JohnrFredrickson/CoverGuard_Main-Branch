import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoverGuard',
  description: 'CoverGuard application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
