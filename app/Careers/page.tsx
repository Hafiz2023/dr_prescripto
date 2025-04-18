import Image from "next/image";

export default function Careers() {
  return (
    <div className="text-gray-700">
      {/* Responsive Banner Image */}
      <div className="relative w-full aspect-[16/6] md:aspect-[16/5]">
        <Image
          src="/Careers.png"
          alt="Careers Banner"
          fill
          className="object-cover rounded-b-xl shadow-md"
          priority
        />
      </div>

      <div className="p-6 md:p-10 max-w-5xl mx-auto">
        {/* Heading 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Why Work at Evercare Hospital Lahore?
        </h2>
        <p className="mb-10 text-gray-600 leading-relaxed">
          Evercare Hospital Lahore believes in offering exceptional medical facilities with advanced technologies and personalized care.
          We have a supportive work environment for our staff to help them deliver the best services to our patients.
          If you want to grow your career where compassion blends with cutting-edge healthcare, we’d love to hear from you!
        </p>

        {/* Heading 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Equal Opportunities for Everyone
        </h2>
        <p className="mb-10 text-gray-600 leading-relaxed">
          Evercare Hospital Lahore provides equal opportunities to all employees and the job candidates.
          We welcome qualified applicants regardless of their race, religion, nationality, gender, disability, military background or marital status.
          The policy is applicable to all stages of employment including hiring, promotions, salary package, transfers, training or any work-related programs.
          We make employment decisions fairly and without any discrimination.
        </p>

        {/* TO APPLY */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">TO APPLY:</h3>
        <p className="mb-6 text-gray-600">
          Please send an email to{" "}
          <a href="mailto:careers.lahore@evercare.pk" className="text-sky-600 hover:underline">
            careers.lahore@evercare.pk
          </a>{" "}
          placing in the subject line the position you are applying for.
        </p>

        {/* TO APPLY FOR MEDICAL CONSULTANT */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">TO APPLY FOR MEDICAL CONSULTANT POSITION:</h3>
        <p className="text-gray-600">
          Please send an email to{" "}
          <a href="mailto:careers.consultant@evercare.pk" className="text-sky-600 hover:underline">
            careers.consultant@evercare.pk
          </a>{" "}
          placing in the subject line the specialty you are applying for.
        </p>
      </div>
    </div>
  );
}
