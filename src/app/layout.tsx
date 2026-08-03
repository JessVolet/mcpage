import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mc.jessvega.me",
  description: "Portafolio brutalista retro con mapa BlueMap, mods y tutoriales de Minecraft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-[#f4f0e8] text-black">{children}</body>
    </html>
  );
}
