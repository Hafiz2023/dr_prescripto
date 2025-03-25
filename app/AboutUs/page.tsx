"use client";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 md:px-16 ">
      {/* ABOUT US SECTION */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          ABOUT <span className="text-blue-600">US</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 justify-evenly items-center">
          {/* ✅ Image with Hover Effect */}
          <div className="relative group">
            <Image
              src="/about.png"
              alt="Doctors"
              width={500}
              height={400}
              className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
            />
            <div className="absolute inset-0 hover:bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service.
            </p>
            <h3 className="font-semibold text-lg mt-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* ✅ Boxes with Hover Effect */}
          <div className="border border-gray-300 rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-100 hover:text-white">
            <h3 className="font-semibold text-lg text-blue-600">EFFICIENCY:</h3>
            <p className="text-gray-600 mt-2">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-l hover:bg-blue-100 hover:text-white">
            <h3 className="font-semibold text-lg text-blue-600">
              CONVENIENCE:
            </h3>
            <p className="text-gray-600 mt-2">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border border-gray-300  rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-100 hover:text-white">
            <h3 className="font-semibold text-lg text-blue-600">
              PERSONALIZATION:
            </h3>
            <p className="text-gray-600 mt-2  ">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
