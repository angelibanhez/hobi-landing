// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import NavTab from "@/components/NavTab"; // Ajusta la ruta a tu componente

export const metadata = {
  title: "Hobi - Conecta con actividades favoritas",
  description: "Landing page de Hobi, la app que conecta a personas con intereses similares.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {/* Navbar */}
        <NavTab />

        {/* Contenido principal */}
        <main>{children}</main>

        {/* Footer (opcional) */}
      </body>
    </html>
  );
}
