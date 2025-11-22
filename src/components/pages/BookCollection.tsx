import { useState } from 'react';
import { Search, Clock, Filter } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'home' | 'collection' | 'summary' | 'library' | 'premium' | 'about';

interface BookCollectionProps {
  onNavigate: (page: Page, bookId?: number) => void;
}

const categories = [
  'Semua',
  'Pengembangan Diri',
  'Bisnis',
  'Psikologi',
  'Filsafat',
  'Sejarah',
  'Fiksi'
];

const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', category: 'Pengembangan Diri', time: '12 menit' },
  { id: 2, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psikologi', time: '15 menit' },
  { id: 3, title: 'The Lean Startup', author: 'Eric Ries', category: 'Bisnis', time: '10 menit' },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Sejarah', time: '18 menit' },
  { id: 5, title: 'Deep Work', author: 'Cal Newport', category: 'Pengembangan Diri', time: '14 menit' },
  { id: 6, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Bisnis', time: '11 menit' },
  { id: 7, title: 'Man\'s Search for Meaning', author: 'Viktor Frankl', category: 'Filsafat', time: '13 menit' },
  { id: 8, title: 'Educated', author: 'Tara Westover', category: 'Fiksi', time: '16 menit' },
  { id: 9, title: 'Meditations', author: 'Marcus Aurelius', category: 'Filsafat', time: '12 menit' },
  { id: 10, title: 'Start with Why', author: 'Simon Sinek', category: 'Bisnis', time: '10 menit' },
  { id: 11, title: 'Influence', author: 'Robert Cialdini', category: 'Psikologi', time: '14 menit' },
  { id: 12, title: 'The 7 Habits', author: 'Stephen Covey', category: 'Pengembangan Diri', time: '17 menit' },
];

export function BookCollection({ onNavigate }: BookCollectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'Semua' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Koleksi <span className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] bg-clip-text text-transparent">Buku</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi 1000+ ringkasan buku terbaik dalam Bahasa Indonesia
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Cari buku, topik, atau penulis…"
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-[#FDC448] rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-700">Kategori:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#FDC448] to-[#E3762B] text-gray-900 hover:opacity-90'
                    : 'border-2 border-gray-200 hover:border-[#FDC448] text-gray-700'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan <span className="text-[#E3762B]">{filteredBooks.length}</span> buku
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#FDC448]"
            >
              {/* Book Cover */}
              <div className="aspect-[3/4] bg-gradient-to-br from-[#FDC448] to-[#E3762B] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-7xl">📖</span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-5">
                <Badge className="mb-2 bg-[#FDC448]/10 text-gray-700 border-0 text-xs">
                  {book.category}
                </Badge>
                <h3 className="text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{book.author}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    {book.time}
                  </div>
                  <Button
                    onClick={() => onNavigate('summary', book.id)}
                    size="sm"
                    className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 text-sm"
                  >
                    Lihat Ringkasan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl text-gray-900 mb-2">Buku tidak ditemukan</h3>
            <p className="text-gray-600 mb-6">
              Coba cari dengan kata kunci yang berbeda atau pilih kategori lain
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              variant="outline"
              className="border-2 border-[#E3762B] text-[#E3762B] hover:bg-[#E3762B]/5"
            >
              Reset Filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
