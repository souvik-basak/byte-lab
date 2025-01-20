import { Blocks, Github, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for developers, by developers</span>
          </div>

          {/* Links Section */}
          <div className="flex items-center gap-6">
            <Link
              href="/support"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Terms
            </Link>
            <a
              href="https://forms.gle/kJk9xmr84opn6t5i7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Feedback
            </a>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <div className="text-gray-400 text-sm">
            © 2025 Byte Lab. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Twitter className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
