import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface CollectionDetailPageProps {
  collectionId: string | null;
  onNavigate: (page: Page, bookId?: number) => void;
  previousPage: Page;
}

const collectionsData: Record<string, {
  name: string;
  description: string;
  color: string;
  icon: string;
  books: Array<{
    id: number;
    title: string;
    author: string;
    category: string;
    time: string;
    coverColor: string;
  }>;
}> = {
  productivity: {
    name: 'Productivity Essentials',
    description: 'Master your time and boost your productivity with these essential reads',
    color: 'from-[#FDC448] to-[#E3762B]',
    icon: '⚡',
    books: [
      { id: 1, title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', time: '12 min', coverColor: 'from-blue-400 to-blue-600' },
      { id: 5, title: 'Deep Work', author: 'Cal Newport', category: 'Productivity', time: '14 min', coverColor: 'from-purple-400 to-purple-600' },
      { id: 12, title: 'The 7 Habits', author: 'Stephen Covey', category: 'Self-Help', time: '17 min', coverColor: 'from-emerald-400 to-emerald-600' },
      { id: 13, title: 'Getting Things Done', author: 'David Allen', category: 'Productivity', time: '15 min', coverColor: 'from-orange-400 to-orange-600' },
    ]
  },
  leadership: {
    name: 'Leadership & Management',
    description: 'Learn to lead and inspire teams effectively',
    color: 'from-blue-500 to-indigo-600',
    icon: '👔',
    books: [
      { id: 10, title: 'Start with Why', author: 'Simon Sinek', category: 'Business', time: '10 min', coverColor: 'from-cyan-400 to-cyan-600' },
      { id: 14, title: 'Leaders Eat Last', author: 'Simon Sinek', category: 'Leadership', time: '13 min', coverColor: 'from-indigo-400 to-indigo-600' },
    ]
  },
  mindfulness: {
    name: 'Mindfulness & Wellbeing',
    description: 'Find balance and improve your mental health',
    color: 'from-purple-500 to-pink-600',
    icon: '🧘',
    books: [
      { id: 7, title: "Man's Search for Meaning", author: 'Viktor Frankl', category: 'Philosophy', time: '13 min', coverColor: 'from-indigo-400 to-indigo-600' },
      { id: 9, title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', time: '12 min', coverColor: 'from-yellow-400 to-yellow-600' },
    ]
  },
  finance: {
    name: 'Money & Investing',
    description: 'Build wealth and achieve financial freedom',
    color: 'from-green-500 to-emerald-600',
    icon: '💰',
    books: [
      { id: 6, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Finance', time: '11 min', coverColor: 'from-green-400 to-green-600' },
      { id: 15, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', category: 'Finance', time: '14 min', coverColor: 'from-emerald-400 to-emerald-600' },
    ]
  },
};

export function CollectionDetailPage({ collectionId, onNavigate, previousPage }: CollectionDetailPageProps) {
  const collection = collectionId ? collectionsData[collectionId] : null;

  // Determine back button text based on previous page
  const getBackButtonText = () => {
    if (previousPage === 'discover') {
      return 'Back to Discover';
    }
    return 'Back to Collections';
  };

  const getBackPage = (): Page => {
    if (previousPage === 'discover') {
      return 'discover';
    }
    return 'collections';
  };

  if (!collection) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 dark:text-gray-400">Collection not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={() => onNavigate(getBackPage())}
          variant="ghost"
          className="mb-6 text-gray-600 dark:text-gray-400 hover:text-[#E3762B]"
        >
          <ArrowLeft className="mr-2" size={20} />
          {getBackButtonText()}
        </Button>

        {/* Collection Header */}
        <div className={`bg-gradient-to-br ${collection.color} rounded-2xl p-12 mb-12 text-white`}>
          <div className="max-w-3xl">
            <div className="text-7xl mb-6">{collection.icon}</div>
            <h1 className="text-4xl sm:text-5xl mb-4">
              {collection.name}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {collection.description}
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <BookOpen size={20} />
                <span>{collection.books.length} books</span>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid - Same format as Discover page */}
        <div>
          <h2 className="text-2xl text-gray-900 dark:text-white mb-6">
            Books in this collection
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.books.map((book) => (
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
        </div>
      </div>
    </div>
  );
}