import { ArrowRight, Clock, Heart, Zap, Calendar, Users, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'home' | 'collection' | 'summary' | 'library' | 'premium' | 'about';

interface HomePageProps {
  onNavigate: (page: Page, bookId?: number) => void;
}

const categories = [
  { id: 1, name: 'Pengembangan Diri', color: '#FDC448' },
  { id: 2, name: 'Bisnis', color: '#E3762B' },
  { id: 3, name: 'Psikologi', color: '#FDC448' },
  { id: 4, name: 'Filsafat', color: '#E3762B' },
  { id: 5, name: 'Sejarah', color: '#FDC448' },
  { id: 6, name: 'Fiksi', color: '#E3762B' },
];

const popularBooks = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', category: 'Pengembangan Diri', time: '12 menit' },
  { id: 2, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psikologi', time: '15 menit' },
  { id: 3, title: 'The Lean Startup', author: 'Eric Ries', category: 'Bisnis', time: '10 menit' },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Sejarah', time: '18 menit' },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FDC448]/10 via-[#FFFBF5] to-[#E3762B]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#FDC448]/20 text-gray-900 border-0">
                🎉 Platform Ringkasan Buku #1 di Indonesia
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
                Baca buku nggak ribet,{' '}
                <span className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] bg-clip-text text-transparent">
                  cukup baca ala-ala!
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Kuala yang baca, lu yang paham. Pahami isi buku dengan ringkasan cepat, ringan, dan fun dalam Bahasa Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('collection')}
                  className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 px-8 py-6 text-lg group"
                >
                  Mulai Baca Ringkasan
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => onNavigate('collection')}
                  variant="outline"
                  className="border-2 border-[#E3762B] text-[#E3762B] hover:bg-[#E3762B]/5 px-8 py-6 text-lg"
                >
                  Lihat Koleksi Buku
                </Button>
              </div>
            </div>

            {/* Hero Illustration - Minimalist */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[400px] bg-gradient-to-br from-[#FDC448]/20 to-[#E3762B]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-6xl">📚</span>
                  </div>
                  <p className="text-gray-700 text-lg">1000+ Ringkasan Buku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kualala Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Kenapa Kualala?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Platform ringkasan buku yang bikin kamu tetap produktif tanpa harus habiskan waktu berjam-jam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#FDC448]/20 hover:border-[#FDC448] transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Cepat</h3>
              <p className="text-gray-600">
                Pahami inti buku dalam 10-15 menit. Hemat waktu, tetap dapet ilmunya!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#FDC448]/20 hover:border-[#FDC448] transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Ringkas</h3>
              <p className="text-gray-600">
                Hanya poin-poin penting yang kamu butuhkan. Gak bertele-tele, langsung ke intinya.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#FDC448]/20 hover:border-[#FDC448] transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Bermakna</h3>
              <p className="text-gray-600">
                Interpretasi dalam Bahasa Indonesia yang relate dengan kehidupan sehari-hari kamu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FDC448]/5 to-[#E3762B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Kategori Populer</h2>
            <p className="text-lg text-gray-600">
              Temukan buku dari berbagai kategori favorit kamu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate('collection')}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 hover:border-[#FDC448]"
                style={{ borderLeftColor: category.color, borderLeftWidth: '4px' }}
              >
                <h3 className="text-gray-900 text-center">{category.name}</h3>
              </button>
            ))}
          </div>

          {/* Popular Books Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularBooks.map((book) => (
              <button
                key={book.id}
                onClick={() => onNavigate('summary', book.id)}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group text-left"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[#FDC448] to-[#E3762B] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl">📖</span>
                  </div>
                </div>
                <div className="p-4">
                  <Badge className="mb-2 bg-[#FDC448]/10 text-gray-700 border-0 text-xs">
                    {book.category}
                  </Badge>
                  <h3 className="text-gray-900 mb-1 group-hover:text-[#E3762B] transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    {book.time}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => onNavigate('collection')}
              variant="outline"
              className="border-2 border-[#E3762B] text-[#E3762B] hover:bg-[#E3762B]/5"
            >
              Lihat Semua Buku
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Book Talk Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Calendar size={20} className="text-white" />
                <span className="text-white">Setiap Minggu</span>
              </div>
              <h2 className="text-3xl sm:text-4xl text-white mb-4">Kualala's Book Talk</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Event mingguan untuk rekomendasi buku terbaik dan insight menarik. Bergabunglah dengan komunitas pembaca Kualala!
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-white/90 px-8 py-6 text-lg"
              >
                <Users className="mr-2" />
                Ikut Book Talk
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Siap upgrade pengetahuan kamu?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Gabung dengan ribuan pembaca yang sudah lebih produktif dengan Kualala
          </p>
          <Button 
            onClick={() => onNavigate('collection')}
            className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 px-8 py-6 text-lg"
          >
            Mulai Baca Gratis
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
