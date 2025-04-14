"use client";

import { Button } from "@/components/ui/button";

export default function TeacherStudentSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group">
          {/* Teacher Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 hover:!opacity-100">
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                TEACHER
              </span>
            </div>
            
            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-5 leading-tight">
              The future of<br />online teaching
            </h2>
            
            <p className="text-[#4A5567] text-lg leading-relaxed mb-8">
              The teacher can lead a remote masterclass wearing a Hololens. Remote students can attend his session and interact with the teacher from their iPhone, iPad and laptop using Google Chrome.
            </p>

            <Button className="bg-white text-[#0066FF] border border-[#0066FF] px-6 py-2.5 rounded-lg hover:bg-blue-50">
              Get in touch with a NextMotion expert
            </Button>
          </div>

          {/* Student Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 hover:!opacity-100">
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                STUDENT
              </span>
            </div>
            
            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-5 leading-tight">
              Learn in an<br />immersive way
            </h2>
            
            <p className="text-[#4A5567] text-lg leading-relaxed mb-8">
              Students can benefit from a remote training session wearing a Hololens. Teachers can guide them remotely from his iPad or laptop using Google Chrome. Everybody can interact in an immersive way.
            </p>

            <Button className="bg-white text-[#0066FF] border border-[#0066FF] px-6 py-2.5 rounded-lg hover:bg-blue-50">
              Get in touch with a NextMotion expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 