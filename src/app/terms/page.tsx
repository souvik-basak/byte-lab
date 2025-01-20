import { Blocks } from "lucide-react";
import Link from "next/link";
import React from "react";

function Terms() {
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

      {/* Terms Content */}
      <h1 className="text-3xl font-bold text-gray-200 mb-6">
        Terms and Conditions
      </h1>
      <p className="text-gray-400 mb-6">
        These Terms and Conditions ("Terms") govern your use of our application
        and services ("App" or "Service"). By accessing or using the App, you
        agree to comply with these Terms. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        1. Acceptance of Terms
      </h2>
      <p className="text-gray-400 mb-4">
        By accessing or using our App, you agree to be bound by these Terms,
        including any future amendments or updates. If you do not agree to these
        Terms, you must refrain from using the App.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        2. Changes to the Terms
      </h2>
      <p className="text-gray-400 mb-4">
        We reserve the right to modify, update, or revise these Terms at any
        time. All changes will be posted on this page, and the effective date of
        the updated Terms will be indicated. Your continued use of the App after
        the changes have been posted constitutes your acceptance of the modified
        Terms.
      </p>

      {/* More sections here... */}
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        3. User Account
      </h2>
      <p className="text-gray-400 mb-4">
        To access certain features of the App, you may need to create an
        account. You agree to provide accurate, current, and complete
        information when registering, and to update it if necessary. You are
        responsible for maintaining the confidentiality of your account
        credentials and are liable for any activities under your account.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        4. Use of the App
      </h2>
      <p className="text-gray-400 mb-4">
        You agree to use the App only for lawful purposes and in accordance with
        these Terms. You may not use the App in a manner that:
      </p>
      <ul className="list-disc pl-6 text-gray-400 mb-6">
        <li>Violates any applicable laws or regulations</li>
        <li>
          Infringes on the intellectual property or privacy rights of others
        </li>
        <li>Attempts to gain unauthorized access to the App or its servers</li>
        <li>Contains malicious code or harmful software</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        5. Restrictions on Use
      </h2>
      <p className="text-gray-400 mb-4">
        You may not copy, modify, distribute, sell, or reverse-engineer any part
        of the App without our express written permission. You also agree not to
        interfere with the normal operation of the App or access its features in
        unauthorized ways.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        6. User Content
      </h2>
      <p className="text-gray-400 mb-4">
        If you submit or upload any content (e.g., code, comments, feedback, or
        other materials) to the App, you grant us a worldwide, royalty-free, and
        transferable license to use, modify, and display that content as part of
        the Service. You represent and warrant that you have the necessary
        rights to the content and that it does not violate any laws or
        third-party rights.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">7. Privacy</h2>
      <p className="text-gray-400 mb-4">
        Your use of the App is also governed by our Privacy Policy, which
        outlines how we collect, use, and protect your personal data. Please
        review the Privacy Policy for more information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        8. Disclaimers
      </h2>
      <p className="text-gray-400 mb-4">
        The App is provided "as is" without any warranties or representations,
        express or implied. We do not guarantee that the App will meet your
        requirements, be error-free, or operate without interruptions. We
        disclaim all liability for any loss or damage arising from your use of
        the App.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        9. Limitation of Liability
      </h2>
      <p className="text-gray-400 mb-4">
        In no event shall we be liable for any indirect, incidental, special, or
        consequential damages, or for any loss of profits, data, or use, arising
        from your use or inability to use the App, even if we have been advised
        of the possibility of such damages.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        10. Indemnification
      </h2>
      <p className="text-gray-400 mb-4">
        You agree to indemnify, defend, and hold harmless us, our affiliates,
        and our employees, agents, and licensors from any claims, losses,
        damages, or expenses (including legal fees) arising from your use of the
        App, violation of these Terms, or infringement of any third-party
        rights.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        11. Termination
      </h2>
      <p className="text-gray-400 mb-4">
        We reserve the right to suspend or terminate your access to the App at
        any time, without notice, if we believe that you have violated these
        Terms or engaged in any unauthorized or inappropriate conduct.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        12. Governing Law
      </h2>
      <p className="text-gray-400 mb-4">
        These Terms are governed by and construed in accordance with the laws of
        [Your Country or State], without regard to its conflict of law
        principles. You agree to submit to the exclusive jurisdiction of the
        courts in [Your Jurisdiction] to resolve any disputes arising from these
        Terms or your use of the App.
      </p>

      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        13. Contact Us
      </h2>
      <p className="text-gray-400 mb-4">
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at:
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

export default Terms;
