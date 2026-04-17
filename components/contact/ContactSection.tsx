"use client";

import Container from "@/components/Container";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            {/* TITLE */}
            <h1 className="text-[28px] md:text-[34px] font-semibold text-black">
              CONTACT <span className="text-[#E6D400]">ASCO</span>
            </h1>

            {/* DETAILS */}
            <div className="mt-8 space-y-6 text-gray-600 text-sm md:text-[15px] leading-relaxed">
              {/* COMPANY */}
              <div>
                <h3 className="font-semibold text-black">
                  ASCO Qatar Consulting Engineers
                </h3>
                <p className="mt-2">
                  P.O. Box 2514, Doha, Qatar <br />
                  Al Muntazah, Ibn Seen Street, Building 54
                </p>
              </div>

              {/* PHONE */}
              <div>
                <h3 className="font-semibold text-black">Telephone:</h3>
                <p className="mt-2">
                  Tel: (+974) 44100500 <br />
                  Fax: (+974) 44358128
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <h3 className="font-semibold text-black">Email:</h3>
                <p className="mt-2">info@ascoqatar.com</p>
              </div>

              {/* WORKING HOURS */}
              <div>
                <h3 className="font-semibold text-black">WORKING HOURS</h3>
                <p className="mt-2">
                  From Sunday To Thursday <br />
                  7.30 AM – 5.30 PM
                </p>
              </div>

              <a
                href="https://wa.me/97444100500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 pt-3 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#DCF8E8] flex items-center justify-center transition group-hover:bg-[#25D366]">
                  <FaWhatsapp className="text-[#25D366] group-hover:text-white text-[20px]" />
                </div>

                <div>
                  <p className="text-black font-medium leading-none">
                    Message On
                  </p>
                  <p className="text-gray-500 text-sm mt-1">WhatsApp</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex md:justify-start">
            <div className="w-full max-w-[480px] bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-black">
                Send Message
              </h2>

              {/* FORM */}
              <form className="mt-6 space-y-5">
                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-700">Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name..."
                    className="mt-2 w-full border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-700">Your Email*</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="mt-2 w-full border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="text-sm text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="Title..."
                    className="mt-2 w-full border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm text-gray-700">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Type Here..."
                    className="mt-2 w-full border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm outline-none focus:border-black resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#E6D400] text-black rounded-[10px] py-2.5 text-sm md:text-base font-medium hover:opacity-90 transition"
                >
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
