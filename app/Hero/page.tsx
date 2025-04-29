import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-16 px-6 md:px-16  flex justify-evenly">
      <div className="grid grid-cols-1 md:grid-cols-2  justify-between items-center gap-8">
        {/* Left Side: Text & Button */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Book Appointment <br />
            <span className="text-white">With Trusted Doctors</span>
          </h1>
          <p className="text-lg mt-4">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>

          {/* Small Profile Images */}
          <div className="flex items-center mt-6 space-x-2">
            <Image
              src="/group.png"
              alt="Group"
              width={100}
              height={100}
              className="rounded-full border-2 border-white"
            />
          </div>

          {/* Appointment Button with Link */}
          <Link href="/Appointment" className="block">
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-medium rounded-full shadow-md hover:bg-gray-200 transition">
              Book appointment →
            </button>
          </Link>
        </div>

        {/* Right Side: Doctors Image */}
        <div className="relative">
          <div className="absolute inset-y-0 right-0 w-1 bg-black hidden md:block"></div>
          <Image
            src="/header.png"
            alt="Doctors"
            width={500}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
