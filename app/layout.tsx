import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoverGuard',
  description: 'CoverGuard - Production-ready application',
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
