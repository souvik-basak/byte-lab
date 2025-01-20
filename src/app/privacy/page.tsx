import { Blocks } from "lucide-react";
import Link from "next/link";
import React from "react";

function Privacy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="flex items-center gap-3 group relative">
          {/* Logo hover effect */}
          <div
            className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0
              group-hover:opacity-100 transition-all duration-500 blur-xl"
          />

          {/* Logo */}
          <div
            className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
            ring-white/10 group-hover:ring-white/20 transition-all"
          >
            <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
              Byte Lab
            </span>
            <span className="block text-xs text-blue-400/60 font-medium">
              Interactive Code Editor
            </span>
          </div>
        </Link>
      </div>

      {/* Privacy Policy Content */}
      <h1 className="text-3xl font-bold text-gray-200 mb-6">Privacy Policy</h1>
      <p className="text-gray-400 mb-6">
        Your privacy is important to us. This privacy policy explains the types
        of personal information we collect, how it is used, and how we protect
        it.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        1. Information We Collect
      </h2>
      <p className="text-gray-400 mb-4">
        We collect various types of personal and non-personal information when
        you use our app. This information may include, but is not limited to:
      </p>
      <ul className="list-disc pl-6 text-gray-400 mb-6">
        <li>
          Personal information you provide directly (e.g., name, email address,
          etc.)
        </li>
        <li>
          Usage data, including app interactions, error logs, and browsing
          activity
        </li>
        <li>
          Device and browser information (e.g., device type, operating system,
          and browser type)
        </li>
        <li>Location data if you provide location permissions to the app</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="text-gray-400 mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc pl-6 text-gray-400 mb-6">
        <li>To provide and improve the app and services</li>
        <li>To respond to your inquiries, support requests, or feedback</li>
        <li>
          To analyze usage trends and gather statistical data to improve the
          app’s performance
        </li>
        <li>
          To personalize your experience and recommend features based on your
          usage
        </li>
        <li>
          To comply with legal obligations and enforce our Terms of Service
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        3. Sharing Your Information
      </h2>
      <p className="text-gray-400 mb-4">
        We do not sell or rent your personal information to third parties.
        However, we may share your data in the following cases:
      </p>
      <ul className="list-disc pl-6 text-gray-400 mb-6">
        <li>
          With service providers who assist us in operating the app (e.g.,
          hosting services, analytics providers, etc.), but they are required to
          keep your data confidential.
        </li>
        <li>
          If required by law or to protect our legal rights, we may disclose
          information to law enforcement or regulatory authorities.
        </li>
        <li>
          In the event of a merger, acquisition, or sale of assets, your
          personal information may be transferred to the new entity.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        4. Data Retention
      </h2>
      <p className="text-gray-400 mb-4">
        We retain your personal data only for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy, unless a longer retention
        period is required or permitted by law.
      </p>
      <p className="text-gray-400 mb-4">
        If you delete your account or request the deletion of your data, we will
        remove your personal information from our systems, unless we are
        required by law to retain it.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        5. Data Security
      </h2>
      <p className="text-gray-400 mb-4">
        We take the security of your personal information seriously and
        implement reasonable measures to protect your data from unauthorized
        access, alteration, disclosure, or destruction.
      </p>
      <p className="text-gray-400 mb-4">
        While we strive to protect your personal information, no method of
        transmission over the internet or electronic storage is 100% secure. We
        cannot guarantee the absolute security of your data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        6. Your Rights and Choices
      </h2>
      <p className="text-gray-400 mb-4">
        You have the following rights regarding your personal information:
      </p>
      <ul className="list-disc pl-6 text-gray-400 mb-6">
        <li>
          The right to access and review the personal data we hold about you
        </li>
        <li>
          The right to request corrections or updates to inaccurate or
          incomplete data
        </li>
        <li>
          The right to request the deletion of your personal data, subject to
          applicable laws
        </li>
        <li>
          The right to object to or restrict the processing of your personal
          data in certain circumstances
        </li>
        <li>
          The right to withdraw consent at any time if processing is based on
          consent
        </li>
      </ul>
      <p className="text-gray-400 mb-4">
        To exercise any of these rights, please contact us at
        support@yourapp.com.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        7. Cookies and Tracking Technologies
      </h2>
      <p className="text-gray-400 mb-4">
        We use cookies and similar tracking technologies to enhance your
        experience on our app. Cookies are small data files stored on your
        device that allow us to remember your preferences and improve
        functionality.
      </p>
      <p className="text-gray-400 mb-4">
        You can control cookie settings through your browser. However, disabling
        cookies may affect the functionality of certain features in our app.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        8. Changes to This Privacy Policy
      </h2>
      <p className="text-gray-400 mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. Any updates will be posted on
        this page, and the "Effective Date" will be updated accordingly.
      </p>
      <p className="text-gray-400 mb-4">
        We encourage you to review this policy periodically to stay informed
        about how we are protecting your information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        9. Contact Us
      </h2>
      <p className="text-gray-400 mb-4">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <p className="text-gray-400 mb-4">
        Email:{" "}
        <a
          href="mailto:support@yourapp.com"
          className="text-blue-400 hover:underline"
        >
          support@yourapp.com
        </a>
      </p>
      <p className="text-gray-400 mb-4">
        Address: 123 Main Street, City, Country
      </p>
    </div>
  );
}

export default Privacy;
