import type { Metadata } from "next";
import Providers from './providers'

export const metadata: Metadata = {
  title: "Universal-Greening-Organisation",
  description: "1 Million Trees Campaign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
