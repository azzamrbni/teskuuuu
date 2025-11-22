import { ArrowLeft, Award, Lock } from 'lucide-react';
import { Button } from '../ui/button';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment' | 'completed-books' | 'my-favorites' | 'continue-reading' | 'achievements';

interface AchievementsPageProps {
  onNavigate: (page: Page) => void;
}

const unlockedAchievements = [
  { icon: '🔥', title: 'Speed Reader', description: 'Read 10 books in a month', date: 'Unlocked Dec 2024', progress: 100 },
  { icon: '📚', title: 'Bookworm', description: 'Read 50 books total', date: 'Unlocked Nov 2024', progress: 100 },
  { icon: '⭐', title: 'Consistent', description: '30-day reading streak', date: 'Unlocked Jan 2025', progress: 100 },
  { icon: '🎯', title: 'Goal Achiever', description: 'Complete monthly goal', date: 'Unlocked Dec 2024', progress: 100 },
  { icon: '📖', title: 'First Step', description: 'Read your first book', date: 'Unlocked May 2024', progress: 100 },
  { icon: '💡', title: 'Knowledge Seeker', description: 'Read 5 non-fiction books', date: 'Unlocked Jun 2024', progress: 100 },
  { icon: '🌟', title: 'Rising Star', description: 'Maintain 7-day streak', date: 'Unlocked Jul 2024', progress: 100 },
  { icon: '⏰', title: 'Early Bird', description: 'Read before 8 AM', date: 'Unlocked Aug 2024', progress: 100 },
];

const lockedAchievements = [
  { icon: '👑', title: 'Master Reader', description: 'Read 100 books total', progress: 24, target: 100 },
  { icon: '🏆', title: 'Champion', description: '100-day reading streak', progress: 12, target: 100 },
  { icon: '💎', title: 'Diamond Reader', description: 'Read 200 books total', progress: 24, target: 200 },
  { icon: '🚀', title: 'Speedster', description: 'Read 20 books in a month', progress: 8, target: 20 },
  { icon: '🌈', title: 'Diverse Reader', description: 'Read from 10 different categories', progress: 5, target: 10 },
  { icon: '📝', title: 'Note Taker', description: 'Create 50 highlights', progress: 23, target: 50 },
  { icon: '💪', title: 'Persistent', description: '365-day reading streak', progress: 12, target: 365 },
  { icon: '🎓', title: 'Scholar', description: 'Read 50 educational books', progress: 15, target: 50 },
];

export function AchievementsPage({ onNavigate }: AchievementsPageProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Button
            onClick={() => onNavigate('profile')}
            variant="ghost"
            size="sm"
            className="mb-6 text-gray-600 dark:text-gray-400"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Profile
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-xl flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white">
                All Achievements
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {unlockedAchievements.length} of {unlockedAchievements.length + lockedAchievements.length} unlocked
              </p>
            </div>
          </div>
        </div>

        {/* Unlocked Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-6">
            Unlocked 🎉
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {unlockedAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-xl p-6 border border-[#FDC448]/30 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <h3 className="text-gray-900 dark:text-white mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                <p className="text-xs text-[#E3762B]">{achievement.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Locked Achievements */}
        <section>
          <h2 className="text-2xl text-gray-900 dark:text-white mb-6">
            Locked 🔒
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lockedAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="absolute top-3 right-3">
                  <Lock size={16} className="text-gray-400" />
                </div>
                <div className="text-5xl mb-3 opacity-40">{achievement.icon}</div>
                <h3 className="text-gray-900 dark:text-white mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{achievement.description}</p>
                
                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{achievement.progress}/{achievement.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-2 rounded-full transition-all"
                      style={{ width: `${(achievement.progress / achievement.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Motivational CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-2xl p-8 border border-[#FDC448]/20">
          <h3 className="text-2xl text-gray-900 dark:text-white mb-2">
            Keep Reading to Unlock More!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Continue your reading journey and earn amazing achievements
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
