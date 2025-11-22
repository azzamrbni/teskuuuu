import { ArrowRight, Clock, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface MyLibraryProps {
  onNavigate: (page: Page, bookId?: number) => void;
}

const readingBooks = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', progress: 65 },
  { id: 5, title: 'Deep Work', author: 'Cal Newport', progress: 30 },
];

const completedBooks = [
  { id: 2, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', time: '16 min', coverColor: 'from-purple-400 to-purple-600' },
  { id: 3, title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', time: '13 min', coverColor: 'from-blue-400 to-blue-600' },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', time: '18 min', coverColor: 'from-green-400 to-green-600' },
];

const savedBooks = [
  { id: 6, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Finance', time: '11 min', coverColor: 'from-green-400 to-green-600' },
  { id: 7, title: "Man's Search for Meaning", author: 'Viktor Frankl', category: 'Philosophy', time: '13 min', coverColor: 'from-indigo-400 to-indigo-600' },
];

const stats = [
  { icon: BookOpen, label: 'Books Read', value: '8', color: 'from-blue-500 to-indigo-600' },
  { icon: Clock, label: 'Total Time', value: '2.4h', color: 'from-purple-500 to-pink-600' },
  { icon: TrendingUp, label: 'Streak', value: '7 Days', color: 'from-[#FDC448] to-[#E3762B]' },
];

export function MyLibrary({ onNavigate }: MyLibraryProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] bg-clip-text text-transparent">Library</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Track your reading progress and manage your collection
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="text-white" size={26} />
              </div>
              <p className="text-3xl text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Currently Reading */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-gray-900 dark:text-white">
              Currently Reading
            </h2>
            <Button
              onClick={() => onNavigate('continue-reading' as Page)}
              variant="ghost"
              size="sm"
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {readingBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-28 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-900 dark:text-white mb-1 group-hover:text-[#E3762B] transition-colors">{book.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{book.author}</p>
                    <Badge className="bg-[#FDC448]/10 text-gray-700 dark:text-gray-300 border-0 text-xs">
                      {book.progress}% complete
                    </Badge>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-2 rounded-full transition-all"
                    style={{ width: `${book.progress}%` }}
                  ></div>
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
        </section>

        {/* Completed Books */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-gray-900 dark:text-white">
              Completed Books
            </h2>
            <Button
              onClick={() => onNavigate('completed-books' as Page)}
              variant="ghost"
              size="sm"
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => onNavigate('summary', book.id)}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex gap-4 p-5">
                  <div className={`w-20 h-28 bg-gradient-to-br ${book.coverColor} rounded-lg flex-shrink-0 shadow-md`}>
                  </div>
                  <div className="flex-1">
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
              </div>
            ))}
          </div>
        </section>

        {/* Saved Books */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-gray-900 dark:text-white">
              My Favorites
            </h2>
            <Button
              onClick={() => onNavigate('my-favorites' as Page)}
              variant="ghost"
              size="sm"
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => onNavigate('summary', book.id)}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex gap-4 p-5">
                  <div className={`w-20 h-28 bg-gradient-to-br ${book.coverColor} rounded-lg flex-shrink-0 flex items-center justify-center shadow-md`}>
                    <span className="text-white text-3xl">📚</span>
                  </div>
                  <div className="flex-1">
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
              </div>
            ))}
          </div>
        </section>

        {/* Empty State CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-2xl p-8 text-center border border-[#FDC448]/20">
          <h3 className="text-2xl text-gray-900 dark:text-white mb-2">Explore More Books!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Discover new books and add them to your library
          </p>
          <Button
            onClick={() => onNavigate('discover')}
            className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
          >
            Browse Collections
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}