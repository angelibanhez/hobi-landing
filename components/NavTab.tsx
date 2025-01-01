"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavTab() {
  return (
    <nav className="
      flex items-center justify-between w-full 
      px-4 py-3 
      border-b border-[var(--neutral-30)] 
      bg-[var(--background)]
    ">
      {/* LOGO (link a Home) */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/images/hobi-logo.png"
            alt="Hobi Logo"
            width={80}
            height={40}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-6">
        <Link
          href="/como-funciona"
          className="text-sm font-semibold hover:text-[var(--primary-color)] transition-colors"
        >
          Cómo Funciona
        </Link>
        <Link
          href="/planes"
          className="text-sm font-semibold hover:text-[var(--primary-color)] transition-colors"
        >
          Planes
        </Link>
        <Link
          href="/testimonios"
          className="text-sm font-semibold hover:text-[var(--primary-color)] transition-colors"
        >
          Testimonios
        </Link>
        <Link
          href="/preguntas-frecuentes"
          className="text-sm font-semibold hover:text-[var(--primary-color)] transition-colors"
        >
          FAQ
        </Link>
        <Link
          href="/contacto"
          className="text-sm font-semibold hover:text-[var(--primary-color)] transition-colors"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
