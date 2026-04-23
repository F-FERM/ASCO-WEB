import React from "react";

const CareerCv = () => {
  return (
    <div className="mt-6 w-full flex justify-center">
      <div className="max-w-[420px] text-center">
        {/* TITLE */}
        <p className="text-sm md:text-base font-medium text-gray-800">
          Prefer to apply directly?
        </p>

        {/* SUBTEXT */}
        <p className="mt-1 text-sm text-gray-500">
          Send your CV to our recruitment team
        </p>

        {/* EMAIL */}
        <a
          href="mailto:info@ascoqatar.com?subject=Job Application"
          className="mt-3 block text-[#542452] font-semibold text-base md:text-lg underline underline-offset-4 hover:text-black transition"
        >
          info@ascoqatar.com
        </a>

        {/* DIVIDER */}
        <div className="w-10 h-[2px] bg-[#EFDF0E] mx-auto mt-3 rounded-full" />

        {/* INFO */}
        <div className="mt-3 text-xs text-gray-400 space-y-1">
          <p> Include the position in the subject</p>
          <p> Attach your updated CV (PDF preferred)</p>
          <p> Our team will review and get back to you</p>
        </div>
      </div>
    </div>
  );
};

export default CareerCv;
