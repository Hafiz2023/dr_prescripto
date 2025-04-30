"use client";

import { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

export default function Evercare() {
  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-blue-200 text-white overflow-hidden h-[600px]">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/evercare-hero.jpg"
            alt="Evercare Hospital Lahore"
            layout="fill"
            objectFit="cover"
            className="object-center object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-6">
            Evercare Hospital Lahore
          </h1>
          <p className="text-xl text-gray-300 mb-12 animate-on-scroll opacity-0 translate-y-6 animation-delay-100">
            A part of the global Evercare Group network
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
            <StatCard number="04" label="Countries" delay="100" />
            <StatCard number="+2.3M" label="Patient Episodes" delay="200" />
            <StatCard number="05" label="Hospitals" delay="100" />
            <StatCard number="+735" label="Hospital Beds" delay="200" />
            <StatCard number=">20" label="Medical Centers" delay="300" />
            <StatCard number="4500" label="Employees" delay="300" />
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-teal-600 animate-on-scroll opacity-0 translate-y-6">
                About Evercare Group
              </h2>
              <p className="text-lg text-gray-700 animate-on-scroll opacity-0 translate-y-6 animation-delay-100">
                Evercare Hospital Lahore is fully owned by the Evercare Group, a
                global healthcare investment organization committed to making
                quality healthcare accessible to all. Evercare invests in
                emerging markets, providing private, high-quality healthcare
                services that address the specific needs of local communities.
              </p>

              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6 animate-on-scroll opacity-0 translate-y-6 animation-delay-200">
                <p className="text-gray-800">
                  The Group is at the forefront of transforming traditional
                  healthcare models through its cross-continental integrated
                  platform, impact-driven approach, and focus on quality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-teal-600 animate-on-scroll opacity-0 translate-y-6 animation-delay-100">
                Our Global Presence
              </h2>
              <p className="text-lg text-gray-700 animate-on-scroll opacity-0 translate-y-6 animation-delay-200">
                Evercare portfolio spans 5 hospitals, 20 clinics, and 75
                diagnostic centers across South Asia and Africa. These
                facilities play a critical role in addressing healthcare
                capacity gaps, offering significant societal and economic
                benefits, including healthier populations, increased employment,
                local retention of skilled professionals, and a reduction in
                outbound medical tourism.
              </p>

              <p className="text-lg text-gray-700 animate-on-scroll opacity-0 translate-y-6 animation-delay-300">
                With a workforce of 10,000 employees, Evercare prides itself on
                being the most diverse healthcare provider in the regions where
                it operates. Together, its people drive systemic change in
                healthcare across Africa and South Asia.
              </p>

              <p className="text-lg text-gray-700 animate-on-scroll opacity-0 translate-y-6 animation-delay-400">
                Evercare is fully owned by the Evercare Health Fund, a US$1
                billion fund focused on emerging markets, managed by The Rise
                Fund, the impact investment arm of TPG Capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}

function StatCard({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: string;
}) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm p-4 rounded-lg transition-all hover:bg-blue-900/50 hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-6 animation-delay-${delay}`}
    >
      <div className="text-2xl md:text-3xl font-bold mb-1">{number}</div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </div>
  );
}
