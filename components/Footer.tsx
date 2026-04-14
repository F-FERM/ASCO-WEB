"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#C0C0C0] pt-14 pb-6">
      <Container>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LOGO + DESC */}
          <div>
            <Image
              src="/asco_logo.png"
              alt="logo"
              width={180}
              height={50}
              className="object-contain"
            />

            <p className="mt-4 text-sm max-w-[280px]">
              ASCO Qatar delivers innovative engineering solutions with a legacy
              of excellence since 1970.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-600 hover:bg-[#EFDF0E] hover:text-black transition"
                  >
                    <Icon size={16} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link href="/clients">Clients</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MdEmail />
                <span>info@ascoqatar.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone />
                <span>(+974) 44100500</span>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone />
                <span>(+974) 44358128</span>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="font-semibold mb-4">Location</h3>

            <div className="flex items-start gap-2 text-sm max-w-[250px]">
              <MdLocationOn className="mt-1" />
              <p>
                ASCO QATAR <br />
                P.O. Box 2514 Doha, Qatar <br />
                Al Muntazah, Ibn Seena Street, Building 54
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-dashed mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-black-500">
          <p>© 2026 ASCO QATAR. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
