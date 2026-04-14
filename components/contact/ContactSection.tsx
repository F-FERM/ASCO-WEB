"use client";

import Container from "@/components/Container";

export default function ContactSection() {
  return (
    <section className="bg-[white] py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            {/* TITLE */}
            <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-black">
              CONTACT <span className="text-[#EFDF0E]">ASCO</span>
            </h1>

            {/* COMPANY */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm md:text-base">
              <div>
                <h3 className="font-medium text-black">
                  ASCO Qatar Consulting Engineers
                </h3>
                <p className="mt-1">
                  P.O. Box 2514, Doha, Qatar <br />
                  Al Muntazah, Ibn Seena Street, Building 54
                </p>
              </div>

              {/* PHONE */}
              <div>
                <h3 className="font-medium text-black">Telephone:</h3>
                <p className="mt-1">
                  Tel: (+974) 44100500 <br />
                  Fax: (+974) 44358128
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <h3 className="font-medium text-black">Email:</h3>
                <p className="mt-1">info@ascoqatar.com</p>
              </div>

              {/* SECOND EMAIL */}
              <div>
                <h3 className="font-medium text-black">Email:</h3>
                <p className="mt-1">info@ascoqatar.com</p>
              </div>

              {/* WORKING HOURS */}
              <div>
                <h3 className="font-medium text-black">WORKING HOURS</h3>
                <p className="mt-1">
                  From Sunday to Thursday <br />
                  7.30 AM – 5.30 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex md:justify-start">
            <div className="w-full max-w-[460px] bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-black">
                Send Message
              </h2>

              {/* FORM */}
              <form className="mt-6 space-y-4">
                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-700">Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name..."
                    className="mt-1 w-full border border-gray-200 rounded-[8px] px-4 py-2 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-700">Your Email*</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="mt-1 w-full border border-gray-200 rounded-[8px] px-4 py-2 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="text-sm text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="Title..."
                    className="mt-1 w-full border border-gray-200 rounded-[8px] px-4 py-2 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm text-gray-700">Your Message</label>
                  <textarea
                    placeholder="Type Here..."
                    rows={4}
                    className="mt-1 w-full border border-gray-200 rounded-[8px] px-4 py-2 text-sm outline-none focus:border-black resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="mt-2 bg-[#EFDF0E] text-black rounded-[8px] px-6 py-2.5 text-sm md:text-base font-medium hover:opacity-90 transition"
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
