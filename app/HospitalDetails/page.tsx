"use client";
import { link } from "fs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HospitalDetails() {
  const services = [
    {
      title: "Emergency Care",
      desc: "24/7 emergency services with state-of-the-art facilities",
      icon: "🚑",
      slug: "emergency-care",
    },
    {
      title: "Cardiology",
      desc: "Comprehensive heart care with modern catheterization lab",
      icon: "❤️",
      slug: "cardiology",
     
    },
    {
      title: "Oncology",
      desc: "Complete cancer care including chemotherapy",
      icon: "🦠",
      slug: "oncology",
    
    },
    {
      title: "Orthopedics",
      desc: "Joint replacements and sports medicine specialists",
      icon: "🦴",
      slug: "orthopedics",
    },
    {
      title: "Pediatrics",
      desc: "Specialized care for children of all ages",
      icon: "👶",
      slug: "pediatrics",
    },
    {
      title: "Neurology",
      desc: "Brain and nerve care specialists",
      icon: "🧠",
      slug: "neurology",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Evercare Hospital Lahore | Transforming Healthcare</title>
        <meta
          name="description"
          content="Evercare Hospital Lahore - State-of-the-art healthcare facility"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/Hospital.building.jpg"
          alt="Evercare Hospital Lahore"
          fill
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 text-white">
          <div className="mb-8 flex flex-col items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
              <span className="text-white">evercare</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6">
              HOSPITAL LAHORE
            </div>
            <div className="w-full max-w-md">
              <div className="border-t-2 border-white my-4"></div>
              <p className="text-xl sm:text-2xl md:text-3xl font-light mb-2">
                Transforming Healthcare
              </p>
              <div className="border-t-2 border-white my-4"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/Appointment"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <Link
              href="/ServicesHospital"
              className="bg-transparent border-2 border-white hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Evercare Hospital Lahore
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Evercare Hospital Lahore is a state-of-the-art,
                multi-disciplinary hospital located in Lahore, Pakistan, and
                serves as the flagship facility of the Evercare Group in the
                country. Since its opening in 2019, the hospital has been
                offering a broad spectrum of clinical services and specialties.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                We provide high-quality diagnostic, treatment, and clinical
                care, leveraging the latest technologies to ensure top-tier
                medical outcomes.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                As a fully owned entity of the Evercare Group, we are committed
                to delivering advanced diagnostics and treatments, adhering to
                the highest international standards of care. Our mission is to
                transform healthcare quality in Pakistan.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden group">
              <Image
                src="/hospital.png"
                alt="Hospital Interior"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Accreditation Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Punjab Healthcare Commission", logo: "/PHC.png" },
              { name: "Joint Commission International", logo: "/JOIN.jpg" },
              { name: "LEED Gold Certified", logo: "/LEED.jpg" },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-20 mx-auto mb-4 relative transform transition-transform duration-500 hover:scale-110">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-700">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered with compassion and
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-700">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                1000+
              </h3>
              <p className="text-sm sm:text-base">Healthcare Professionals</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                24/7
              </h3>
              <p className="text-sm sm:text-base">Emergency Services</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                50+
              </h3>
              <p className="text-sm sm:text-base">Specialties</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                2019
              </h3>
              <p className="text-sm sm:text-base">Established</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1 text-xl">
                  📍
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    1 Khayaban-e-Jinnah, Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1 text-xl">
                  📞
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Emergency
                  </h3>
                  <p className="text-gray-600">042 111 000 880</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1 text-xl">
                  ✉️
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@evercarelahore.com</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-2xl"
                  >
                    <span className="sr-only">Facebook</span>
                    <span>📱</span>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-2xl"
                  >
                    <span className="sr-only">Twitter</span>
                    <span>💬</span>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-2xl"
                  >
                    <span className="sr-only">Instagram</span>
                    <span>📸</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
