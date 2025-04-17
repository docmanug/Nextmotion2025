"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeacherStudentSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 group">
          {/* Teacher Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 hover:!opacity-100">
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-xs sm:text-sm">
                TEACHER
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-5 leading-tight">
              The future of
              <br />
              online teaching
            </h2>

            <p className="text-[#4A5567] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              The teacher can lead a remote masterclass wearing a Hololens.
              Remote students can attend his session and interact with the
              teacher from their iPhone, iPad and laptop using Google Chrome.
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-white text-[#0066FF] border border-[#0066FF] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-50 text-sm sm:text-base">
                Get in touch with a NextMotion expert
              </Button>
            </Link>
          </div>

          {/* Student Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 hover:!opacity-100">
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-xs sm:text-sm">
                STUDENT
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-5 leading-tight">
              Learn in an
              <br />
              immersive way
            </h2>

            <p className="text-[#4A5567] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Students can benefit from a remote training session wearing a
              Hololens. Teachers can guide them remotely from his iPad or laptop
              using Google Chrome. Everybody can interact in an immersive way.
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-white text-[#0066FF] border border-[#0066FF] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-50 text-sm sm:text-base">
                Get in touch with a NextMotion expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
