"use client";

import Image from "next/image";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="flex flex-col items-center text-center max-w-lg w-full">
        {/* Logo */}
        <div className="-mt-16 -mb-24 sm:-mb-32 w-full flex justify-center px-4">
          <Image
            src="/logo.jpeg"
            alt="ÉLAN & CO."
            width={800}
            height={300}
            className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] h-auto object-contain mix-blend-multiply pointer-events-none"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#142045] mb-6 leading-[1.3] tracking-tight">
          Our website is under<br />maintenance
        </h1>

        {/* Subtitle */}
        <p className="text-[#3b476b] text-base sm:text-lg mb-10 leading-relaxed font-medium">
          We will be back online soon. Until then, you<br className="hidden sm:block" /> can reach us:
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2 text-base sm:text-lg text-[#142045] font-medium">
          <p>
            Call <a href="tel:+919818753437" className="underline decoration-[#142045] underline-offset-[5px] hover:text-[#0b1229] transition-colors">+91 98187 53437</a>
          </p>
          <p>
            Email <a href="mailto:elancoworldwide@gmail.com" className="underline decoration-[#142045] underline-offset-[5px] hover:text-[#0b1229] transition-colors">elancoworldwide@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
