import { ArrowRight, Clock, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface DiscoverPageProps {
  onNavigate: (page: Page, idOrBookId?: number | string) => void;
}

const continueReading = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    progress: 65,
    coverColor: 'from-blue-400 to-blue-600'
  },
  {
    id: 5,
    title: 'Deep Work',
    author: 'Cal Newport',
    progress: 30,
    coverColor: 'from-purple-400 to-purple-600'
  }
];

const freeBooks = [
  { id: 12, title: 'Deep Work', author: 'Cal Newport', category: 'Career', time: '14 min', coverColor: 'from-purple-400 to-purple-600', bgColor: 'from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20' },
  { id: 32, title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', category: 'Communication', time: '13 min', coverColor: 'from-pink-400 to-pink-600', bgColor: 'from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20' },
];

const newReleases = [
  { id: 21, title: 'Atomic Habits', author: 'James Clear', category: 'Habits', time: '12 min', coverColor: 'from-blue-400 to-blue-600', bgColor: 'from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20', isNew: true },
  { id: 22, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', time: '15 min', coverColor: 'from-pink-400 to-pink-600', bgColor: 'from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20', isNew: true },
  { id: 23, title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', time: '10 min', coverColor: 'from-orange-400 to-orange-600', bgColor: 'from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20', isNew: true },
];

const collections = [
  { id: 'productivity', name: 'Productivity Essentials', count: 24, color: 'from-[#FDC448] to-[#E3762B]' },
  { id: 'leadership', name: 'Leadership & Management', count: 18, color: 'from-blue-500 to-indigo-600' },
  { id: 'mindfulness', name: 'Mindfulness & Wellbeing', count: 32, color: 'from-purple-500 to-pink-600' },
  { id: 'finance', name: 'Money & Investing', count: 21, color: 'from-green-500 to-emerald-600' },
];

const bookOfTheDay = {
  id: 100,
  title: 'The Psychology of Money',
  author: 'Morgan Housel',
  category: 'Finance',
  time: '11 min',
  rating: 4.8,
  description: 'Timeless lessons on wealth, greed, and happiness doing well with money.',
  coverColor: 'from-emerald-400 to-emerald-600'
};

export function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title with Gradient Background */}
        <div className="mb-8 relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-[#FDC448]/10 via-[#E3762B]/5 to-transparent rounded-3xl -z-10" 
               style={{ height: 'calc(100% + 2rem)', top: '-1rem' }} 
          />
          
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
            Discover the world's best ideas
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Pahami isi buku terbaik dalam hitungan menit
          </p>
        </div>

        {/* Continue Reading */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-gray-900 dark:text-white">Continue Reading</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('continue-reading')}
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View all
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {continueReading.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
              >
                <div className="flex gap-4 mb-4">
                  <div className={`w-20 h-28 bg-gradient-to-br ${book.coverColor} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-white text-3xl">📖</span>
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

        {/* Quotes Section */}
        <section className="mb-12">
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-3xl p-8 sm:p-10 overflow-hidden border border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
              {/* Left Content */}
              <div>
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 dark:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote Text */}
                <blockquote className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                  "A reader lives a thousand lives before he dies. The man who never reads lives only one."
                </blockquote>
                
                {/* Book Info */}
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A Game of Thrones • George R.R. Martin
                  </p>
                </div>
              </div>
              
              {/* Right - Book Cover */}
              <div className="hidden md:block">
                <div className="w-32 h-44 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl flex items-center justify-center">
                  <span className="text-white text-5xl">📖</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Books */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-2xl text-gray-900 dark:text-white">Free Books</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {freeBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => onNavigate('summary', book.id)}
                className={`relative bg-gradient-to-br ${book.bgColor} rounded-2xl p-8 overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer group`}
              >
                <div className="flex gap-6 items-start">
                  {/* Book Cover - Tilted */}
                  <div className="flex-shrink-0">
                    <div className={`w-28 h-36 bg-gradient-to-br ${book.coverColor} rounded-lg shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform`}>
                      <span className="text-white text-4xl">📚</span>
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-1 pt-2">
                    <Badge className="mb-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 text-xs uppercase tracking-wide">
                      {book.category}
                    </Badge>
                    <h3 className="text-xl text-gray-900 dark:text-white mb-2 group-hover:text-[#E3762B] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">By {book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Books */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-gray-900 dark:text-white">Recommended for You</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('books')}
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View all
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 31, title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', category: 'Self-Help', time: '16 min', coverColor: 'from-indigo-400 to-indigo-600' },
              { id: 33, title: 'The Power of Now', author: 'Eckhart Tolle', category: 'Mindfulness', time: '11 min', coverColor: 'from-amber-400 to-amber-600' },
            ].map((book) => (
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

        {/* New Releases */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-gray-900 dark:text-white">New Releases</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('books')}
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View all
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newReleases.map((book) => (
              <div
                key={book.id}
                onClick={() => onNavigate('summary', book.id)}
                className={`relative bg-gradient-to-br ${book.bgColor} rounded-2xl p-8 overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer group`}
              >
                {/* New Badge */}
                <Badge className="absolute top-6 right-6 bg-red-400 text-white border-0 shadow-md text-xs">
                  ✨ New
                </Badge>

                <div className="flex gap-6 items-start">
                  {/* Book Cover - Tilted */}
                  <div className="flex-shrink-0">
                    <div className={`w-28 h-36 bg-gradient-to-br ${book.coverColor} rounded-lg shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform`}>
                      <span className="text-white text-4xl">📚</span>
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-1 pt-2">
                    <Badge className="mb-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 text-xs uppercase tracking-wide">
                      {book.category}
                    </Badge>
                    <h3 className="text-xl text-gray-900 dark:text-white mb-2 group-hover:text-[#E3762B] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">By {book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collections */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-gray-900 dark:text-white">Collections</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('collections')}
              className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
            >
              View all
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => onNavigate('collection-detail', collection.id)}
                className={`bg-gradient-to-br ${collection.color} rounded-xl p-6 text-white hover:shadow-xl transition-all text-left group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl">📚</span>
                  </div>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </div>
                <h3 className="text-lg mb-2">{collection.name}</h3>
                <p className="text-sm text-white/80">{collection.count} books</p>
              </button>
            ))}
          </div>
        </section>

        {/* Book of The Day */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl text-gray-900 dark:text-white">Book of The Day</h2>
          </div>

          <div 
            onClick={() => onNavigate('summary', bookOfTheDay.id)}
            className="bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-2xl border-2 border-[#FDC448]/30 overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Book Cover - Smaller */}
              <div className="md:w-48 flex-shrink-0">
                <div className={`aspect-[2/3] bg-gradient-to-br ${bookOfTheDay.coverColor} rounded-xl relative shadow-xl`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl">📖</span>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="flex flex-col justify-center flex-1">
                <Badge className="mb-2 bg-[#FDC448] text-gray-900 border-0 w-fit text-xs">
                  {bookOfTheDay.category}
                </Badge>
                <h3 className="text-2xl text-gray-900 dark:text-white mb-1 group-hover:text-[#E3762B] transition-colors">
                  {bookOfTheDay.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">by {bookOfTheDay.author}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-[#FDC448] text-[#FDC448]" />
                    <span className="text-sm text-gray-900 dark:text-white">{bookOfTheDay.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    {bookOfTheDay.time}
                  </div>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {bookOfTheDay.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}