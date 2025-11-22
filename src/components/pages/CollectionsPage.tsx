import { ArrowRight, BookOpen } from 'lucide-react';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface CollectionsPageProps {
  onNavigate: (page: Page, collectionId?: string) => void;
}

const collections = [
  { 
    id: 'productivity', 
    name: 'Productivity Essentials', 
    count: 24, 
    description: 'Master your time and boost your productivity',
    color: 'from-[#FDC448] to-[#E3762B]',
    icon: '⚡'
  },
  { 
    id: 'leadership', 
    name: 'Leadership & Management', 
    count: 18, 
    description: 'Learn to lead and inspire teams effectively',
    color: 'from-blue-500 to-indigo-600',
    icon: '👔'
  },
  { 
    id: 'mindfulness', 
    name: 'Mindfulness & Wellbeing', 
    count: 32, 
    description: 'Find balance and improve your mental health',
    color: 'from-purple-500 to-pink-600',
    icon: '🧘'
  },
  { 
    id: 'finance', 
    name: 'Money & Investing', 
    count: 21, 
    description: 'Build wealth and achieve financial freedom',
    color: 'from-green-500 to-emerald-600',
    icon: '💰'
  },
  { 
    id: 'psychology', 
    name: 'Psychology & Behavior', 
    count: 28, 
    description: 'Understand human mind and behavior',
    color: 'from-pink-500 to-rose-600',
    icon: '🧠'
  },
  { 
    id: 'entrepreneurship', 
    name: 'Entrepreneurship', 
    count: 19, 
    description: 'Start and grow your own business',
    color: 'from-orange-500 to-red-600',
    icon: '🚀'
  },
  { 
    id: 'communication', 
    name: 'Communication Skills', 
    count: 16, 
    description: 'Improve your speaking and writing',
    color: 'from-cyan-500 to-blue-600',
    icon: '💬'
  },
  { 
    id: 'creativity', 
    name: 'Creativity & Innovation', 
    count: 22, 
    description: 'Unlock your creative potential',
    color: 'from-yellow-500 to-orange-600',
    icon: '🎨'
  },
  { 
    id: 'history', 
    name: 'History & Culture', 
    count: 25, 
    description: 'Learn from the past to shape the future',
    color: 'from-amber-500 to-yellow-600',
    icon: '📜'
  },
  { 
    id: 'science', 
    name: 'Science & Technology', 
    count: 20, 
    description: 'Discover the wonders of science',
    color: 'from-teal-500 to-cyan-600',
    icon: '🔬'
  },
  { 
    id: 'philosophy', 
    name: 'Philosophy & Wisdom', 
    count: 15, 
    description: 'Explore life\'s biggest questions',
    color: 'from-indigo-500 to-purple-600',
    icon: '🤔'
  },
  { 
    id: 'relationships', 
    name: 'Relationships & Love', 
    count: 14, 
    description: 'Build stronger connections with others',
    color: 'from-rose-500 to-pink-600',
    icon: '❤️'
  },
];

export function CollectionsPage({ onNavigate }: CollectionsPageProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
            Book Collections
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Curated book collections for every aspect of your life
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => onNavigate('collection-detail', collection.id)}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all group text-left"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${collection.color} p-8 relative`}>
                <div className="text-6xl mb-3">{collection.icon}</div>
                <div className="text-white/80 text-sm mb-1">{collection.count} books</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-gray-900 dark:text-white mb-2 group-hover:text-[#E3762B] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center text-[#E3762B] group-hover:gap-2 transition-all">
                  <span className="text-sm">Explore Collection</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}