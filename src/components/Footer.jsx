import React from 'react'
import { Facebook, Instagram, Linkedin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="text-2xl font-semibold text-gray-900">Salt Bank</div>
            <p className="mt-2 max-w-sm text-sm text-gray-600">Digital-first banking for Romania. Premium experience. Fair, transparent, secure.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <nav className="space-y-2 text-sm text-gray-700">
              <div className="font-medium text-gray-900">Company</div>
              <a href="#" className="hover:text-teal-600">About</a>
              <a href="#" className="hover:text-teal-600">Careers</a>
              <a href="#" className="hover:text-teal-600">Press</a>
            </nav>
            <nav className="space-y-2 text-sm text-gray-700">
              <div className="font-medium text-gray-900">Legal</div>
              <a href="#" className="hover:text-teal-600">Terms</a>
              <a href="#" className="hover:text-teal-600">Privacy</a>
              <a href="#" className="hover:text-teal-600">Security</a>
            </nav>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="font-medium text-gray-900">Follow</div>
              <div className="flex items-center gap-3 text-gray-700">
                <Facebook className="h-5 w-5 hover:text-teal-600" />
                <Instagram className="h-5 w-5 hover:text-teal-600" />
                <Linkedin className="h-5 w-5 hover:text-teal-600" />
              </div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                <Globe className="h-4 w-4" />
                <span>RO / EN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} Salt Bank. All rights reserved.</div>
      </div>
    </footer>
  )
}
