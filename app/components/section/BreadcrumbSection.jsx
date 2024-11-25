"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const BreadcrumbSection = () => {
  const url = usePathname();
  const withOutSlash = url.replace("/", "");
  const breadcrumbTitle = withOutSlash.replace("-", " ");

  
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[54px] font-bold font-rajdhani uppercase leading-[64px] text-black">
            {breadcrumbTitle}
          </h1>

          <nav className="text-[16px] font-rajdhani uppercase font-bold flex items-center space-x-2">
            <i className="bi bi-house-door-fill"></i>
            <Link href="/" className="text-[#2A37EA] flex items-center">
              HOME
            </Link>
            <span className="text-[#FF902E]">{url}</span>
          </nav>
        </div>
      </div>

      <div className="h-1 bg-[#FF902E] mt-4"></div>
    </section>
  );
};

export default BreadcrumbSection;
