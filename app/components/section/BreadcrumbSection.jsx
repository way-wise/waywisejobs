"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const BreadcrumbSection = () => {
  const url = usePathname();
  const withOutSlash = url.replace("/", "");
  const breadcrumbTitle = withOutSlash.replaceAll("-", " ");

  
  return (
    <section className="hidden sm:block bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="md:text-[54px] text-[20px] font-bold font-rajdhani uppercase md:leading-[64px] leading-[28px] text-black">
            {breadcrumbTitle}
          </h1>

          <nav className="md:text-[16px] text-[14px] font-rajdhani uppercase font-bold flex items-center space-x-2">
            <i className="bi bi-house-door-fill"></i>
            <Link href="/" className="text-[#2A37EA] flex items-center">
              HOME
            </Link>
            <span className="text-[#FF902E]">{url}</span>
          </nav>
        </div>
      </div>

      {/* <div className="h-1 bg-[#FF902E] mt-4"></div> */}
    </section>
  );
};

export default BreadcrumbSection;
