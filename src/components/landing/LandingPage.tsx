import { ArrowRight, BookOpen, Zap, Heart, Moon, Sun, Check, Crown } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'landing' | 'login' | 'signup' | 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const features = [
  {
    icon: Zap,
    title: 'Cepat & Efisien',
    description: 'Pahami inti buku dalam 10-15 menit. Hemat waktu, tetap dapet ilmunya!'
  },
  {
    icon: BookOpen,
    title: '1000+ Ringkasan',
    description: 'Koleksi lengkap dari berbagai kategori: bisnis, self-help, psikologi, dan lainnya.'
  },
  {
    icon: Heart,
    title: 'Bahasa Indonesia',
    description: 'Interpretasi yang relate dengan kehidupan sehari-hari dalam Bahasa Indonesia.'
  }
];

const pricing = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 'Rp49.000',
    period: '/bulan',
    description: 'Perfect untuk mencoba',
    features: [
      'Akses ke semua buku',
      'Ringkasan lengkap',
      'Offline reading',
      'Tanpa iklan',
      'Cancel kapan saja',
    ],
    popular: false,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: 'Rp399.000',
    period: '/tahun',
    originalPrice: 'Rp588.000',
    description: 'Hemat 32% - Paling populer!',
    features: [
      'Semua fitur Monthly',
      'Hemat Rp189.000/tahun',
      'Priority support',
      'Early access fitur baru',
      'Exclusive content',
    ],
    popular: true,
    badge: 'BEST VALUE',
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 'Rp999.000',
    period: 'sekali bayar',
    description: 'Akses selamanya',
    features: [
      'Semua fitur Yearly',
      'Bayar sekali, pakai selamanya',
      'Lifetime updates',
      'VIP support',
      'Eksklusif merchandise',
    ],
    popular: false,
  },
];

export function LandingPage({ onNavigate, isDarkMode, onToggleDarkMode }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <nav className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
                <span className="text-white">K</span>
              </div>
              <span className="text-xl tracking-tight text-gray-900 dark:text-white">KUALALA</span>
            </div>

            {/* Nav Items */}
            <div className="flex items-center gap-6">
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-gray-600 dark:text-gray-400" />
                ) : (
                  <Moon size={20} className="text-gray-600" />
                )}
              </button>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hidden sm:block">
                About
              </a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hidden sm:block">
                Pricing
              </a>
              <Button
                onClick={() => onNavigate('login')}
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Login
              </Button>
              <Button
                onClick={() => onNavigate('signup')}
                className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDC448]/10 via-[#E3762B]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
              Baca buku nggak ribet,{' '}
              <span className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] bg-clip-text text-transparent">
                cukup baca ala-ala!
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12">
              Kuala yang baca, lu yang paham. Pahami isi buku terbaik dunia dalam hitungan menit dengan ringkasan berkualitas dalam Bahasa Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('signup')}
                className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 px-8 py-6 text-lg"
              >
                Mulai Gratis
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 text-lg"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 sm:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              Kenapa Kualala?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Cara paling efisien untuk belajar dari buku-buku terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-gradient-to-br from-[#FDC448]/5 to-[#E3762B]/5 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-2xl mb-6">
              <Crown className="text-white" size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Pilih paket yang sesuai dengan kebutuhanmu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.id}
                onClick={() => onNavigate('signup')}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 transition-all hover:border-[#E3762B] hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FDC448] to-[#E3762B] text-gray-900 border-0">
                    {plan.badge}
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('signup');
                  }}
                  className="w-full mb-6 bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-[#FDC448] hover:to-[#E3762B] hover:text-gray-900 text-gray-900 dark:text-white transition-all"
                >
                  Get Started
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="text-[#E3762B] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6">
            Siap untuk mulai belajar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Gabung dengan ribuan pembaca yang sudah menghemat waktu mereka
          </p>
          <Button
            onClick={() => onNavigate('signup')}
            className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 px-8 py-6 text-lg"
          >
            Mulai Sekarang - Gratis!
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
                  <span className="text-white">K</span>
                </div>
                <span className="text-xl tracking-tight text-gray-900 dark:text-white">KUALALA</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Platform ringkasan buku terbaik dalam Bahasa Indonesia. Belajar lebih cepat, lebih efisien.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Kualala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
