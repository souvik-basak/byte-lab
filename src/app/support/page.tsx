"use client";
import { Blocks } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Support() {
  // State to manage which FAQ is open (for toggling visibility)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ data
  const faqs = [
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by emailing support@yourapp.com or using the contact form below.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Our refund policy allows refunds within 30 days of purchase. Please refer to our refund page for more details.",
    },
    {
      question: "Where can I find documentation?",
      answer:
        "You can find the documentation in the Help section or visit the docs page at docs.ourapp.com.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click 'Forgot Password' to receive a reset link.",
    },
    {
      question: "Can I change my subscription plan?",
      answer:
        "Yes, you can change your subscription plan in the 'Account Settings' section.",
    },
  ];

  // Function to toggle FAQ answers visibility
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle open/close of specific FAQ
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Add your logo here */}
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

      <h1 className="text-3xl font-bold text-gray-200 mb-6">Support</h1>

      {/* Support Description */}
      <p className="text-gray-400 mb-6">
        Need help? We're here for you! Explore our resources or contact us for
        assistance with your issues or questions.
      </p>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-gray-400 mb-4">
            Check out our FAQ section for answers to commonly asked questions
            about our app's features, setup, and usage.
          </p>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="cursor-pointer text-lg font-medium text-gray-200 flex justify-between items-center"
                  onClick={() => toggleFaq(index)} // Toggle FAQ visibility on click
                >
                  <span>{faq.question}</span>
                  <span className="text-gray-500">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </div>
                {openFaq === index && (
                  <div className="mt-2 text-gray-400 text-base">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Troubleshooting
          </h2>
          <p className="text-gray-400 mb-4">
            Encountering a problem? Use our step-by-step troubleshooting guide
            to resolve common issues.
          </p>
          <p className="text-gray-400">
            Reach out to us for assistance or explore our knowledge base for
            solutions.
          </p>
        </div>

        {/* Community Support */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Community Support
          </h2>
          <p className="text-gray-400 mb-4">
            Join our vibrant community of developers to exchange ideas, share
            solutions, and collaborate.
          </p>
          <a
            href="https://discord.gg/yourcommunity"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Discord
          </a>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 mb-4">
            Can’t find what you need? Reach out to our support team for
            personalized assistance.
          </p>
          <p className="text-gray-400">
            Email us at:{" "}
            <a
              href="mailto:support@yourapp.com"
              className="text-blue-400 hover:underline"
            >
              support@yourapp.com
            </a>
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Additional Resources
        </h2>
        <ul className="list-disc pl-6 text-gray-400">
          <li className="mb-2">
            <a href="/api-docs" className="text-blue-400 hover:underline">
              API Documentation
            </a>{" "}
            – Learn how to integrate with our API.
          </li>
          <li className="mb-2">
            <a href="/changelog" className="text-blue-400 hover:underline">
              Changelog
            </a>{" "}
            – Stay updated on our latest changes and features.
          </li>
          <li className="mb-2">
            <a
              href="/keyboard-shortcuts"
              className="text-blue-400 hover:underline"
            >
              Keyboard Shortcuts
            </a>{" "}
            – Boost productivity with these handy shortcuts.
          </li>
        </ul>
      </div>

      {/* Feedback Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Give Us Your Feedback
        </h2>
        <p className="text-gray-400 mb-4">
          Your feedback helps us improve. Share your thoughts about the app or
          suggest new features.
        </p>
        <a
          href="https://forms.gle/kJk9xmr84opn6t5i7"
          className="text-blue-400 hover:underline"
        >
          Submit Feedback
        </a>
      </div>
    </div>
  );
}

export default Support;
