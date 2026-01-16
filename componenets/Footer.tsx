"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ChevronUp, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white">
    
      <div className="bg-[#2D2D2D] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div>
            <Image
              src="/logo.png"
              alt="VanLock Security"
              width={160}
              height={80}
              className="mb-4"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are specialists in advanced van security solutions. Our systems inspire confidence.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="bg-white text-[#2D2D2D] p-2 rounded hover:bg-[#1E88E5] hover:text-white transition">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="bg-white text-[#2D2D2D] p-2 rounded hover:bg-[#1E88E5] hover:text-white transition">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="bg-white text-[#2D2D2D] p-2 rounded hover:bg-[#1E88E5] hover:text-white transition">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

        
          <div>
            <h3 className="text-[20px] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Fleets", href: "/fleets" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-2 hover:text-[#1E88E5] transition">
                  <ChevronRight size={16} className="text-[#2282C6]" />
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h3 className="text-[20px] font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Van Dead Locks",
                "Van Hook Locks",
                "Van Slam Locks",
                "Van Statement Lock",
                "Replacement Lock For Ford",
                "Repair Plate Or External Shield",
                "Air Vent Installation",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 hover:text-[#1E88E5] transition">
                  <ChevronRight size={16} className="text-[#2282C6]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h3 className="text-[20px] font-semibold mb-4">Contact Details</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#2282C6]" />
                <span>07446898025</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#2282C6]" />
                <span>info@vanlocksecurity.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#2282C6] mt-1" />
                <span>Van Lock Security, 594 Green Lane, Ilford</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#2282C6] py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm">
        <p className="text-white mb-3 md:mb-0">
          Copyright © 2025 <span className="font-semibold">VanLock Security</span> | Designed by{" "}
          <Link href="" target="_blank" className="underline font-semibold hover:text-black transition">
            LogiNest
          </Link>{" "}
          | All Rights Reserved
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#2282C6] hover:bg-[#1565C0] transition text-white p-2 rounded-full"
        >
          <ChevronUp size={22} />
        </button>
      </div>
    </footer>
  );
}
