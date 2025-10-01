"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left Side - Form */}
        <div className="w-full lg:w-[45%] p-8 flex flex-col">
          <div className="flex justify-between items-center mb-20">
            <Link href="/" className="text-[#1650EF]">
              ← Back
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-[#6B7280]">Need help?</span>
            </div>
          </div>

          <div className="max-w-[360px] mx-auto w-full flex-1 flex flex-col justify-center -mt-20">
            <h1 className="text-[28px] font-bold text-[#111827] mb-8">
              Sign in
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#111827] text-base placeholder-[#9CA3AF]"
                />
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#111827] text-base placeholder-[#9CA3AF]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#9CA3AF]"
                    >
                      <path
                        d="M2.5 3.35954L3.3593 2.50024L17.5 16.641L16.6407 17.5003L2.5 3.35954Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.0003 12.5C11.3809 12.5 12.5003 11.3807 12.5003 10C12.5003 9.81038 12.4753 9.62638 12.4283 9.45068L9.45095 6.47338C9.27525 6.42638 9.09125 6.40138 8.90163 6.40138C7.52101 6.40138 6.40163 7.52076 6.40163 8.90138C6.40163 10.282 7.52101 11.4014 8.90163 11.4014C9.09125 11.4014 9.27525 11.3764 9.45095 11.3294L12.4283 14.3067C12.4753 14.131 12.5003 13.947 12.5003 13.7574C12.5003 12.3768 11.3809 11.2574 10.0003 11.2574C9.81063 11.2574 9.62663 11.2824 9.45094 11.3294L6.47364 8.35207C6.42664 8.52777 6.40164 8.71177 6.40164 8.90138C6.40164 10.282 7.52101 11.4014 8.90164 11.4014C9.09125 11.4014 9.27525 11.3764 9.45095 11.3294L12.4283 14.3067C12.4753 14.131 12.5003 13.947 12.5003 13.7574C12.5003 12.3768 11.3809 11.2574 10.0003 11.2574"
                        fill="currentColor"
                      />
                      <path
                        d="M10.0003 12.5C8.61964 12.5 7.50027 11.3807 7.50027 10C7.50027 9.81038 7.52527 9.62638 7.57227 9.45068L4.59497 6.47338C4.41927 6.42638 4.23527 6.40138 4.04565 6.40138C2.66503 6.40138 1.54565 7.52076 1.54565 8.90138C1.54565 10.282 2.66503 11.4014 4.04565 11.4014C4.23527 11.4014 4.41927 11.3764 4.59497 11.3294L7.57227 14.3067C7.61927 14.131 7.64427 13.947 7.64427 13.7574C7.64427 12.3768 6.52489 11.2574 5.14427 11.2574C4.95465 11.2574 4.77065 11.2824 4.59495 11.3294L1.61765 8.35207C1.57065 8.52777 1.54565 8.71177 1.54565 8.90138C1.54565 10.282 2.66503 11.4014 4.04565 11.4014C4.23527 11.4014 4.41927 11.3764 4.59497 11.3294L7.57227 14.3067C7.61927 14.131 7.64427 13.947 7.64427 13.7574C7.64427 12.3768 6.52489 11.2574 5.14427 11.2574"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-[#1650EF] text-sm hover:underline"
                >
                  Forgot email or password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1650EF] text-white hover:bg-[#1345D1] py-2.5 rounded-lg text-base font-medium transition-colors"
              >
                Sign in
              </button>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E5E7EB]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-[#6B7280]">
                    or sign in with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-2.5 border border-[#E5E7EB] rounded-lg hover:bg-gray-50 transition-colors"
              >
                <OptimizedImage
                  src="/login_google.webp"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span className="text-[#111827] font-medium">
                  Sign in with Google
                </span>
              </button>

              <div className="text-center pt-4">
                <span className="text-[#6B7280]">
                  Don&apos;t have an account yet?{" "}
                </span>
                <Link href="/signup" className="text-[#1650EF] hover:underline">
                  Sign up now
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block w-[55%] relative">
          <OptimizedImage
            src="/login_1.webp"
            alt="Login"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
