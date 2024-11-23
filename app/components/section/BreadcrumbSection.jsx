"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const BreadcrumbSection = () => {
  const url = usePathname();
  console.log(url);
  
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-[54px] font-bold font-rajdhani uppercase leading-[64px] text-black">
            {url.replace("/", "")}
          </h1>
          {/* Breadcrumb Section */}
          <nav className="text-[16px] font-rajdhani uppercase font-bold flex items-center space-x-2">
            <i class="bi bi-house-door-fill"></i>
            <Link href="/" className="text-[#0b2239] flex items-center">
              HOME
            </Link>
            <span className="text-red-600">{url}</span>
          </nav>
        </div>
      </div>
      {/* Red Line */}
      <div className="h-1 bg-red-600 mt-4"></div>
    </section>
  );
};

export default BreadcrumbSection;
