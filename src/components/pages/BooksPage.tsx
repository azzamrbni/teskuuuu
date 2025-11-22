import { useState, useEffect } from 'react';
import { Search, Clock, Filter } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface BooksPageProps {
  onNavigate: (page: Page, bookId?: number) => void;
  searchQuery?: string;
}

const categories = [
  'All Books',
  'Self-Help',
  'Business',
  'Psychology',
  'Philosophy',
  'History',
  'Fiction',
  'Science',
  'Finance'
];

const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', time: '12 min', coverColor: 'from-blue-400 to-blue-600' },
  { id: 2, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', time: '15 min', coverColor: 'from-pink-400 to-pink-600' },
  { id: 3, title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', time: '10 min', coverColor: 'from-orange-400 to-orange-600' },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', time: '18 min', coverColor: 'from-teal-400 to-teal-600' },
  { id: 5, title: 'Deep Work', author: 'Cal Newport', category: 'Self-Help', time: '14 min', coverColor: 'from-purple-400 to-purple-600' },
  { id: 6, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Finance', time: '11 min', coverColor: 'from-green-400 to-green-600' },
  { id: 7, title: 'Man\'s Search for Meaning', author: 'Viktor Frankl', category: 'Philosophy', time: '13 min', coverColor: 'from-indigo-400 to-indigo-600' },
  { id: 8, title: 'Educated', author: 'Tara Westover', category: 'Fiction', time: '16 min', coverColor: 'from-red-400 to-red-600' },
  { id: 9, title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', time: '12 min', coverColor: 'from-yellow-400 to-yellow-600' },
  { id: 10, title: 'Start with Why', author: 'Simon Sinek', category: 'Business', time: '10 min', coverColor: 'from-cyan-400 to-cyan-600' },
  { id: 11, title: 'Influence', author: 'Robert Cialdini', category: 'Psychology', time: '14 min', coverColor: 'from-rose-400 to-rose-600' },
  { id: 12, title: 'The 7 Habits', author: 'Stephen Covey', category: 'Self-Help', time: '17 min', coverColor: 'from-emerald-400 to-emerald-600' },
];

export function BooksPage({ onNavigate, searchQuery = '' }: BooksPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Books');
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'All Books' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(localSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
            Browse Books
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore 1000+ book summaries across all categories
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search by title or author..."
              className="pl-12 pr-4 py-6 border-gray-300 dark:border-gray-700 focus:border-[#FDC448] rounded-xl bg-white dark:bg-gray-800 dark:text-white"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={18} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className={
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#FDC448] to-[#E3762B] text-gray-900 hover:opacity-90 border-0'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="text-gray-900 dark:text-white">{filteredBooks.length}</span> results
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => onNavigate('summary', book.id)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Book Cover */}
              <div className={`aspect-[3/4] bg-gradient-to-br ${book.coverColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-6xl">📖</span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-4">
                <Badge className="mb-2 bg-[#FDC448]/10 text-gray-700 dark:text-gray-300 border-0 text-xs">
                  {book.category}
                </Badge>
                <h3 className="text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-[#E3762B] transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{book.author}</p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock size={14} className="mr-1" />
                  {book.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl text-gray-900 dark:text-white mb-2">No books found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <Button
              onClick={() => {
                setLocalSearchQuery('');
                setSelectedCategory('All Books');
              }}
              variant="outline"
              className="border-2 border-[#E3762B] text-[#E3762B] hover:bg-[#E3762B]/5"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}