import { Crown, Check, Sparkles, Users, Star, Shield, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface PremiumProps {
  onNavigate: (page: Page) => void;
  onSelectPlan: (plan: { name: string; price: string; period: string; originalPrice?: string }) => void;
}

export function Premium({ onNavigate, onSelectPlan }: PremiumProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const plans = [
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

  const handleSelectPlan = (plan: typeof plans[0]) => {
    onSelectPlan({
      name: plan.name,
      price: plan.price,
      period: plan.period,
      originalPrice: plan.originalPrice,
    });
    // Navigate to payment page
    onNavigate('payment');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-2xl mb-6">
            <Crown className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Upgrade ke <span className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] bg-clip-text text-transparent">Premium</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dapatkan akses unlimited ke ribuan ringkasan buku dan fitur eksklusif lainnya
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handleSelectPlan(plan)}
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
                  handleSelectPlan(plan);
                }}
                className="w-full mb-6 bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-[#FDC448] hover:to-[#E3762B] hover:text-gray-900 text-gray-900 dark:text-white transition-all"
              >
                Choose Plan
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

        {/* Features Comparison */}
        <div className="bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-2xl p-8 border border-[#FDC448]/20">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-[#E3762B]" size={28} />
            <h2 className="text-2xl text-gray-900 dark:text-white">
              Kenapa Premium?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Unlimited Access', desc: 'Akses ke semua buku tanpa batas' },
              { icon: '⚡', title: 'Ringkasan Berkualitas', desc: 'Diringkas oleh expert & AI' },
              { icon: '📱', title: 'Offline Reading', desc: 'Download dan baca kapan saja' },
              { icon: '🎯', title: 'Tanpa Iklan', desc: 'Fokus baca tanpa gangguan' },
              { icon: '🎧', title: 'Audio Summary', desc: 'Dengarkan saat multitasking' },
              { icon: '💎', title: 'Exclusive Content', desc: 'Konten eksklusif untuk member' },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Section */}
        <div className="mt-16 mb-16">
          <div className="bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Users className="text-white" size={40} />
              </div>
              
              <h2 className="text-3xl sm:text-4xl mb-4">
                Dipercaya oleh <span className="font-bold">10,000+</span> Pembaca di Indonesia
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Bergabung dengan ribuan pembaca yang sudah meningkatkan produktivitas dan pengetahuan mereka bersama Kualala
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl mb-2">⭐</div>
                  <div className="text-3xl mb-1">4.9/5</div>
                  <div className="text-sm text-white/80">Rating Pengguna</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-3xl mb-1">1,000+</div>
                  <div className="text-sm text-white/80">Buku Tersedia</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-3xl mb-1">15 Min</div>
                  <div className="text-sm text-white/80">Rata-rata Baca</div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield size={18} />
                  <span>Pembayaran 100% Aman</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star size={18} />
                  <span>Garansi 30 Hari</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Check size={18} />
                  <span>Cancel Kapan Saja</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Punya pertanyaan? Temukan jawabannya di sini
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Apa bedanya paket Free dan Premium?',
                a: 'Paket Free memberikan akses ke 10 ringkasan per bulan dengan iklan, sementara Premium memberikan unlimited access ke semua buku, tanpa iklan, plus fitur offline reading dan audio summary.',
              },
              {
                q: 'Bagaimana cara berlangganan Premium?',
                a: 'Pilih paket yang sesuai, klik "Choose Plan", lalu ikuti instruksi pembayaran. Kamu bisa bayar dengan kartu kredit, transfer bank, atau e-wallet.',
              },
              {
                q: 'Apakah saya bisa cancel langganan kapan saja?',
                a: 'Ya! Kamu bisa cancel langganan kapan saja tanpa biaya tambahan. Akses premium tetap aktif sampai akhir periode yang sudah dibayar.',
              },
              {
                q: 'Apakah ada garansi uang kembali?',
                a: 'Ya, kami menawarkan garansi 30 hari uang kembali tanpa pertanyaan. Jika tidak puas, hubungi kami untuk refund penuh.',
              },
              {
                q: 'Berapa lama akses Lifetime berlaku?',
                a: 'Lifetime berarti selamanya! Bayar sekali dan dapatkan akses ke semua fitur Premium selamanya, termasuk semua update dan buku baru di masa depan.',
              },
              {
                q: 'Apakah pembayaran aman?',
                a: 'Sangat aman! Kami menggunakan enkripsi SSL dan bekerja sama dengan payment gateway terpercaya. Data pembayaran kamu tidak pernah disimpan di server kami.',
              },
              {
                q: 'Bisakah saya upgrade dari Monthly ke Yearly?',
                a: 'Tentu! Kamu bisa upgrade kapan saja dan kami akan memperhitungkan sisa waktu langganan Monthly kamu sebagai kredit untuk paket Yearly.',
              },
              {
                q: 'Apakah bisa digunakan di banyak device?',
                a: 'Ya, dengan satu akun Premium kamu bisa login dan sync progress di semua device (desktop, tablet, smartphone) hingga maksimal 5 device.',
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <h3 className="text-lg text-gray-900 dark:text-white pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-2xl p-8 border border-[#FDC448]/20">
            <h3 className="text-xl text-gray-900 dark:text-white mb-2">
              Masih ada pertanyaan?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tim kami siap membantu kamu kapan saja
            </p>
            <Button
              onClick={() => onNavigate('about')}
              className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
            >
              Hubungi Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}