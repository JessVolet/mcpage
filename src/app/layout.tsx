import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "JV_SYSTEM",
  description: "Landing Neo-Brutalista para el servidor privado de Minecraft de Jess Vega.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favico.ico",
    apple: "/server-icon-hd.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-white text-black">
        {children}
        <Toaster
          position="top-center"
          richColors={false}
          closeButton
          toastOptions={{
            duration: 2200,
            className:
              "rounded-none border-2 border-black bg-white text-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)] font-mono uppercase",
          }}
        />
      </body>
    </html>
  );
}