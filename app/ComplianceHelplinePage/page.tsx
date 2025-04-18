'use client';

const ComplianceHelplinePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">The Compliance Helpline</h1>

      <p className="text-gray-700 text-lg mb-6">
        The Compliance Helpline is a confidential and secure channel through which employees,
        partners, and stakeholders can raise concerns about potential violations of company
        policies, ethical practices, or legal regulations.
      </p>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Why Use the Helpline?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Report ethical or legal concerns</li>
          <li>Ensure transparency and accountability</li>
          <li>Protect your identity with confidentiality</li>
          <li>Promote a healthy workplace culture</li>
        </ul>
      </div>

      <div className="bg-white border p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">Contact Us</h2>
        <p className="text-gray-700">
          If you have a concern or need assistance, please use one of the following contact
          methods:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>
            📧 Email: <a href="mailto:compliance@yourcompany.com" className="text-blue-600 underline">compliance@yourcompany.com</a>
          </li>
          <li>
            📞 Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>
          </li>
          <li>
            🕒 Available: Monday to Friday, 9:00 AM – 5:00 PM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComplianceHelplinePage;
