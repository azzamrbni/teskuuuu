import { ArrowLeft, BookOpen, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment' | 'completed-books' | 'my-favorites' | 'continue-reading' | 'achievements';

interface ContinueReadingPageProps {
  onNavigate: (page: Page, bookId?: number) => void;
}

const readingBooks = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', progress: 65, category: 'Self-Help', lastRead: '2 hours ago' },
  { id: 5, title: 'Deep Work', author: 'Cal Newport', progress: 30, category: 'Productivity', lastRead: '1 day ago' },
  { id: 8, title: 'The 48 Laws of Power', author: 'Robert Greene', progress: 45, category: 'Psychology', lastRead: '2 days ago' },
  { id: 9, title: 'Think and Grow Rich', author: 'Napoleon Hill', progress: 80, category: 'Business', lastRead: '3 days ago' },
  { id: 10, title: 'The Art of War', author: 'Sun Tzu', progress: 15, category: 'Philosophy', lastRead: '5 days ago' },
  { id: 11, title: 'Good to Great', author: 'Jim Collins', progress: 50, category: 'Business', lastRead: '1 week ago' },
];

export function ContinueReadingPage({ onNavigate }: ContinueReadingPageProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Button
            onClick={() => onNavigate('discover')}
            variant="ghost"
            size="sm"
            className="mb-6 text-gray-600 dark:text-gray-400"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Discover
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white">
                Continue Reading
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {readingBooks.length} books in progress
              </p>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {readingBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-32 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <BookOpen className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2 bg-[#FDC448]/10 text-gray-700 dark:text-gray-300 border-0 text-xs">
                    {book.category}
                  </Badge>
                  <h3 className="text-xl text-gray-900 dark:text-white mb-1 group-hover:text-[#E3762B] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">By {book.author}</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={12} className="mr-1" />
                    Last read {book.lastRead}
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                  <Badge className="bg-[#FDC448]/10 text-gray-700 dark:text-gray-300 border-0 text-xs">
                    {book.progress}% complete
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-2 rounded-full transition-all"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
              </div>

              <Button
                onClick={() => onNavigate('summary', book.id)}
                className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
              >
                Continue Reading
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          ))}
        </div>

        {/* Empty State / CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-2xl p-8 border border-[#FDC448]/20">
          <h3 className="text-2xl text-gray-900 dark:text-white mb-2">
            Looking for More?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Discover more great books to add to your reading list
          </p>
          <Button
            onClick={() => onNavigate('discover')}
            className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
          >
            Explore Books
          </Button>
        </div>
      </div>
    </div>
  );
}