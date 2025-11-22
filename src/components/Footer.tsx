import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
                <span className="text-white">K</span>
              </div>
              <span className="text-xl tracking-tight text-gray-900 dark:text-white">KUALALA</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-4 text-sm">
              Platform ringkasan buku berbahasa Indonesia yang membuatmu paham isi buku dengan cepat dan fun. Baca buku nggak ribet, cukup baca ala-ala!
            </p>
            <div className="flex space-x-3">
              <button className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#FDC448]/20 dark:hover:bg-[#FDC448]/20 flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#FDC448]/20 dark:hover:bg-[#FDC448]/20 flex items-center justify-center transition-colors">
                <Twitter size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#FDC448]/20 dark:hover:bg-[#FDC448]/20 flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#FDC448]/20 dark:hover:bg-[#FDC448]/20 flex items-center justify-center transition-colors">
                <Youtube size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-gray-900 dark:text-white text-sm">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('discover')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  Discover
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('books')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  Books
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collections')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('library')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  My Library
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-gray-900 dark:text-white text-sm">Support</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#E3762B] transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Kualala. All rights reserved. Made with ❤️ in Indonesia.
        </div>
      </div>
    </footer>
  );
}