import { ArrowLeft, Clock, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment' | 'completed-books' | 'my-favorites';

interface MyFavoritesPageProps {
  onNavigate: (page: Page, bookId?: number) => void;
}

const favoriteBooks = [
  { id: 6, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Finance', time: '11 min', coverColor: 'from-green-400 to-green-600' },
  { id: 7, title: "Man's Search for Meaning", author: 'Viktor Frankl', category: 'Philosophy', time: '13 min', coverColor: 'from-indigo-400 to-indigo-600' },
  { id: 13, title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', category: 'Self-Help', time: '15 min', coverColor: 'from-blue-400 to-blue-600' },
  { id: 14, title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', category: 'Self-Help', time: '12 min', coverColor: 'from-orange-400 to-orange-600' },
  { id: 15, title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', category: 'Self-Help', time: '10 min', coverColor: 'from-red-400 to-red-600' },
  { id: 16, title: 'Influence', author: 'Robert Cialdini', category: 'Psychology', time: '14 min', coverColor: 'from-purple-400 to-purple-600' },
];

export function MyFavoritesPage({ onNavigate }: MyFavoritesPageProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Button
            onClick={() => onNavigate('library')}
            variant="ghost"
            size="sm"
            className="mb-6 text-gray-600 dark:text-gray-400"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Library
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center">
              <Star className="text-white fill-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white">
                My Favorites
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {favoriteBooks.length} books saved
              </p>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoriteBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => onNavigate('summary', book.id)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="p-5">
                <div className={`w-full aspect-[2/3] bg-gradient-to-br ${book.coverColor} rounded-lg mb-4 shadow-md flex items-center justify-center`}>
                  <span className="text-white text-5xl">📚</span>
                </div>
                <Badge className="mb-2 bg-[#FDC448]/10 text-gray-700 dark:text-gray-300 border-0 text-xs">
                  {book.category}
                </Badge>
                <h3 className="text-gray-900 dark:text-white mb-1 group-hover:text-[#E3762B] transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">By {book.author}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock size={14} className="mr-1" />
                  {book.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
