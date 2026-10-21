
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fantômes — Débusquez les abonnements oubliés",
  description:
    "Repérez les abonnements inutilisés et découvrez ce qu'ils vous coûtent sur une année.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
