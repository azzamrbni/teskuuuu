import { ArrowLeft, Clock, Bookmark, Headphones, Share2, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface BookSummaryProps {
  bookId: number | null;
  onNavigate: (page: Page, bookId?: number) => void;
  previousPage: Page;
}

const bookData = {
  1: {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Pengembangan Diri',
    time: '12 menit',
    description: 'Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk.',
    keyInsights: [
      'Perubahan kecil yang konsisten menghasilkan hasil luar biasa dalam jangka panjang',
      'Fokus pada sistem, bukan hanya pada tujuan akhir',
      'Kebiasaan dibentuk melalui empat tahap: cue, craving, response, reward',
      'Buat kebiasaan baik menjadi obvious, attractive, easy, dan satisfying'
    ],
    takeaway: 'Kamu nggak perlu perubahan drastis untuk mencapai tujuan besar. Mulai dari hal kecil, konsisten setiap hari, dan percaya pada proses. Kebiasaan kecil yang baik adalah fondasi dari kesuksesan jangka panjang. Ingat: "You do not rise to the level of your goals. You fall to the level of your systems."',
    relatedBooks: [2, 5, 12, 10]
  }
};

const defaultBook = {
  title: 'Contoh Buku',
  author: 'Penulis',
  category: 'Pengembangan Diri',
  time: '10 menit',
  description: 'Deskripsi buku akan muncul di sini.',
  keyInsights: [
    'Insight pertama dari buku ini',
    'Insight kedua yang penting untuk dipahami',
    'Insight ketiga yang mengubah perspektif'
  ],
  takeaway: 'Takeaway utama dari buku ini yang bisa langsung kamu terapkan.',
  relatedBooks: []
};

const relatedBooksData: Record<number, { title: string; author: string }> = {
  2: { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
  5: { title: 'Deep Work', author: 'Cal Newport' },
  12: { title: 'The 7 Habits', author: 'Stephen Covey' },
  10: { title: 'The Power of Now', author: 'Eckhart Tolle' }
};

export function BookSummary({ bookId, onNavigate, previousPage }: BookSummaryProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Determine back button text based on previous page
  const getBackButtonText = () => {
    if (previousPage === 'discover') {
      return 'Back to Discover';
    } else if (previousPage === 'library') {
      return 'Back to Library';
    } else if (previousPage === 'collection-detail') {
      return 'Back to Collection';
    }
    return 'Kembali ke Koleksi';
  };

  const getBackPage = (): Page => {
    if (previousPage === 'discover' || previousPage === 'library' || previousPage === 'collection-detail') {
      return previousPage;
    }
    return 'books';
  };
  
  // Mock data - in real app, fetch based on bookId
  const book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Pengembangan Diri',
    time: '12 menit',
    description: 'Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk.',
    keyInsights: [
      'Perubahan kecil yang konsisten menghasilkan hasil luar biasa dalam jangka panjang',
      'Fokus pada sistem, bukan hanya pada tujuan akhir',
      'Kebiasaan dibentuk melalui empat tahap: cue, craving, response, reward',
      'Buat kebiasaan baik menjadi obvious, attractive, easy, dan satisfying'
    ],
    takeaway: 'Kamu nggak perlu perubahan drastis untuk mencapai tujuan besar. Mulai dari hal kecil, konsisten setiap hari, dan percaya pada proses. Kebiasaan kecil yang baik adalah fondasi dari kesuksesan jangka panjang. Ingat: "You do not rise to the level of your goals. You fall to the level of your systems."',
    relatedBooks: [2, 5, 12, 10]
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={() => onNavigate(getBackPage())}
          variant="ghost"
          className="mb-6 text-gray-600 dark:text-gray-400 hover:text-[#E3762B]"
        >
          <ArrowLeft className="mr-2" size={20} />
          {getBackButtonText()}
        </Button>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-8xl">📖</span>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="md:col-span-2">
              <Badge className="mb-3 bg-[#FDC448]/10 text-gray-700 dark:text-gray-300 border-0">
                {book.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">oleh {book.author}</p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {book.description}
              </p>

              <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
                <Clock size={18} />
                <span>Waktu baca: {book.time}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => onNavigate('read-summary', book.id || bookId || undefined)}
                  className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
                >
                  Baca Ringkasan
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`border-gray-300 dark:border-gray-600 ${
                    isFavorite 
                      ? 'text-[#E3762B] border-[#E3762B]' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Star size={18} className="mr-2" fill={isFavorite ? 'currentColor' : 'none'} />
                  {isFavorite ? 'Favorited' : 'Favorite'}
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  <Share2 size={18} className="mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Takeaway - Professional with subtle colors */}
        <div className="relative bg-gradient-to-br from-white to-[#FDC448]/5 dark:from-gray-800 dark:to-[#FDC448]/10 rounded-2xl p-8 sm:p-10 shadow-lg mb-8 border-l-4 border-[#E3762B] overflow-hidden">
          {/* Subtle decorative element */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#FDC448]/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
              Pesan yang Bisa Kamu Ambil
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {book.takeaway}
            </p>
          </div>
        </div>

        {/* Key Insights - Moved below takeaway */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
            Insight Utama
          </h2>
          <div className="space-y-4">
            {book.keyInsights.map((insight, index) => (
              <div key={index} className="flex gap-4 p-4 bg-[#FDC448]/5 dark:bg-[#FDC448]/10 rounded-xl hover:bg-[#FDC448]/10 dark:hover:bg-[#FDC448]/20 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-1 leading-relaxed pt-1">
                  {insight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Books */}
        {book.relatedBooks.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
              Buku Serupa yang Mungkin Kamu Suka
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {book.relatedBooks.map((relatedId) => {
                const relatedBook = relatedBooksData[relatedId];
                return (
                  <button
                    key={relatedId}
                    onClick={() => onNavigate('summary', relatedId)}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group text-left border border-gray-200 dark:border-gray-700"
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#FDC448] to-[#E3762B] relative">
                      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-6xl">📖</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-900 dark:text-white mb-1 group-hover:text-[#E3762B] transition-colors">
                        {relatedBook.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{relatedBook.author}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}