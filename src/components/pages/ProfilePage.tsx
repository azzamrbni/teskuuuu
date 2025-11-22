import { useState } from 'react';
import { Camera, Mail, User as UserIcon, Calendar, BookOpen, Clock, TrendingUp, Award, Target, Zap, Edit2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment' | 'completed-books' | 'my-favorites' | 'continue-reading' | 'achievements';

interface ProfilePageProps {
  onNavigate?: (page: Page) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [name, setName] = useState('Pengguna Kualala');
  const [email, setEmail] = useState('user@kualala.com');
  const [bio, setBio] = useState('Pecinta buku dan pembelajar seumur hidup');
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingGoals, setIsEditingGoals] = useState(false);
  const [readingGoals, setReadingGoals] = useState([
    { title: 'Monthly Goal', current: 8, target: 10, percentage: 80 },
    { title: 'Yearly Goal', current: 24, target: 100, percentage: 24 },
  ]);

  const stats = [
    { 
      icon: BookOpen, 
      label: 'Books Read', 
      value: '24', 
      change: '+3 this week',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      icon: Clock, 
      label: 'Reading Time', 
      value: '8.4h', 
      change: '2.1h this week',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      icon: TrendingUp, 
      label: 'Current Streak', 
      value: '12 Days', 
      change: 'Personal best!',
      color: 'from-[#FDC448] to-[#E3762B]'
    },
  ];

  const achievements = [
    { icon: '🔥', title: 'Speed Reader', description: 'Read 10 books in a month' },
    { icon: '📚', title: 'Bookworm', description: 'Read 50 books total' },
    { icon: '⭐', title: 'Consistent', description: '30-day reading streak' },
    { icon: '🎯', title: 'Goal Achiever', description: 'Complete monthly goal' },
  ];

  const favoriteCategories = [
    { name: 'Self-Help', count: 8, percentage: 33 },
    { name: 'Business', count: 6, percentage: 25 },
    { name: 'Psychology', count: 5, percentage: 21 },
    { name: 'Philosophy', count: 3, percentage: 13 },
    { name: 'History', count: 2, percentage: 8 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In real app, save to backend
  };

  const handleSaveGoals = () => {
    setIsEditingGoals(false);
    // In real app, save to backend
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your profile and track your reading journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Avatar Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-full flex items-center justify-center">
                    <span className="text-white text-5xl">K</span>
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <Camera size={18} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                <h2 className="text-2xl text-gray-900 dark:text-white mb-1 text-center">{name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-center">{email}</p>
                <Badge className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] text-gray-900 border-0">
                  Premium Member
                </Badge>
              </div>

              {/* Profile Form */}
              <form className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-gray-900 dark:text-white text-sm">
                    Full Name
                  </Label>
                  <div className="relative mt-2">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="fullName"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditing}
                      className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white disabled:opacity-60 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 dark:text-white text-sm">
                    Email Address
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!isEditing}
                      className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white disabled:opacity-60 text-sm focus-visible:border-gray-300 dark:focus-visible:border-gray-700 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio" className="text-gray-900 dark:text-white text-sm">
                    Bio
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="bio"
                      type="text"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      disabled={!isEditing}
                      className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white disabled:opacity-60 text-sm"
                      placeholder="Tell us about yourself"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-900 dark:text-white text-sm">Member Since</Label>
                  <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>January 2025</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {isEditing ? (
                    <>
                      <Button
                        type="button"
                        onClick={handleSave}
                        className="flex-1 bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
                        size="sm"
                      >
                        Save Changes
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
                      size="sm"
                    >
                      Edit Profile
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Stats & Preferences */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#E3762B]">
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Reading Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Target className="text-[#E3762B]" size={24} />
                  <h2 className="text-2xl text-gray-900 dark:text-white">
                    Reading Goals
                  </h2>
                </div>
                {!isEditingGoals && (
                  <Button
                    type="button"
                    onClick={() => setIsEditingGoals(true)}
                    variant="ghost"
                    size="sm"
                    className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
                  >
                    <Edit2 size={16} className="mr-1" />
                    Edit
                  </Button>
                )}
              </div>
              <div className="space-y-6">
                {!isEditingGoals ? (
                  <>
                    {readingGoals.map((goal, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-900 dark:text-white">{goal.title}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {goal.current} / {goal.target} books
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-3 rounded-full transition-all flex items-center justify-end pr-2"
                            style={{ width: `${goal.percentage}%` }}
                          >
                            <span className="text-xs text-white">{goal.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {/* Edit Monthly Goal */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Label className="text-gray-900 dark:text-white">Monthly Goal</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={readingGoals[0].target}
                            onChange={(e) => {
                              const newTarget = parseInt(e.target.value) || 10;
                              const newPercentage = Math.round((readingGoals[0].current / newTarget) * 100);
                              setReadingGoals([
                                { ...readingGoals[0], target: newTarget, percentage: newPercentage },
                                readingGoals[1]
                              ]);
                            }}
                            className="w-20 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm text-center"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">books/month</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-3 rounded-full transition-all flex items-center justify-end pr-2"
                          style={{ width: `${readingGoals[0].percentage}%` }}
                        >
                          <span className="text-xs text-white">{readingGoals[0].percentage}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Edit Yearly Goal */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Label className="text-gray-900 dark:text-white">Yearly Goal</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={readingGoals[1].target}
                            onChange={(e) => {
                              const newTarget = parseInt(e.target.value) || 100;
                              const newPercentage = Math.round((readingGoals[1].current / newTarget) * 100);
                              setReadingGoals([
                                readingGoals[0],
                                { ...readingGoals[1], target: newTarget, percentage: newPercentage }
                              ]);
                            }}
                            className="w-20 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm text-center"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">books/year</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-3 rounded-full transition-all flex items-center justify-end pr-2"
                          style={{ width: `${readingGoals[1].percentage}%` }}
                        >
                          <span className="text-xs text-white">{readingGoals[1].percentage}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        type="button"
                        onClick={handleSaveGoals}
                        className="flex-1 bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
                        size="sm"
                      >
                        Save Changes
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setIsEditingGoals(false)}
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Award className="text-[#E3762B]" size={24} />
                  <h2 className="text-2xl text-gray-900 dark:text-white">
                    Achievements
                  </h2>
                </div>
                {onNavigate && (
                  <Button
                    onClick={() => onNavigate('achievements')}
                    variant="ghost"
                    size="sm"
                    className="text-[#E3762B] hover:text-[#E3762B] hover:bg-[#FDC448]/10"
                  >
                    View All
                    <ArrowRight className="ml-1" size={16} />
                  </Button>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#FDC448]/10 to-[#E3762B]/10 dark:from-[#FDC448]/5 dark:to-[#E3762B]/5 rounded-xl p-4 border border-[#FDC448]/30"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="text-gray-900 dark:text-white mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading Preferences */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-[#E3762B]" size={24} />
                <h2 className="text-2xl text-gray-900 dark:text-white">
                  Reading Preferences
                </h2>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white mb-4">Favorite Categories</h3>
                <div className="space-y-3">
                  {favoriteCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {category.count} books ({category.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] h-2 rounded-full transition-all"
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}