import { useState, useEffect } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import { ForgotPasswordPage } from './components/auth/ForgotPasswordPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DiscoverPage } from './components/pages/DiscoverPage';
import { BooksPage } from './components/pages/BooksPage';
import { BookSummary } from './components/pages/BookSummary';
import { MyLibrary } from './components/pages/MyLibrary';
import { Premium } from './components/pages/Premium';
import { About } from './components/pages/About';
import { ProfilePage } from './components/pages/ProfilePage';
import { SettingsPage } from './components/pages/SettingsPage';
import { CollectionsPage } from './components/pages/CollectionsPage';
import { CollectionDetailPage } from './components/pages/CollectionDetailPage';
import { ReadSummaryPage } from './components/pages/ReadSummaryPage';
import { PaymentPage } from './components/pages/PaymentPage';
import { CompletedBooksPage } from './components/pages/CompletedBooksPage';
import { MyFavoritesPage } from './components/pages/MyFavoritesPage';
import { ContinueReadingPage } from './components/pages/ContinueReadingPage';
import { AchievementsPage } from './components/pages/AchievementsPage';
import { TermsOfServicePage } from './components/pages/TermsOfServicePage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';

type Page = 'landing' | 'login' | 'signup' | 'forgot-password' | 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment' | 'completed-books' | 'my-favorites' | 'continue-reading' | 'achievements' | 'terms' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [previousPage, setPreviousPage] = useState<Page>('discover');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    period: string;
    originalPrice?: string;
  } | null>(null);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navigateTo = (page: Page, idOrBookId?: number | string) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    if (typeof idOrBookId === 'number') {
      setSelectedBookId(idOrBookId);
    } else if (typeof idOrBookId === 'string') {
      setSelectedCollectionId(idOrBookId);
    }
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigateTo('discover');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigateTo('landing');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    navigateTo('books');
  };

  // Public pages (before login)
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          {currentPage === 'landing' && <LandingPage onNavigate={navigateTo} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />}
          {currentPage === 'login' && <LoginPage onNavigate={navigateTo} onLogin={handleLogin} />}
          {currentPage === 'signup' && <SignupPage onNavigate={navigateTo} onSignup={handleLogin} />}
          {currentPage === 'forgot-password' && <ForgotPasswordPage onNavigate={navigateTo} />}
          {currentPage === 'terms' && <TermsOfServicePage onNavigate={navigateTo} />}
          {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
        </div>
      </div>
    );
  }

  // Authenticated pages
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900 flex flex-col transition-colors">
        <Navbar 
          currentPage={currentPage} 
          onNavigate={navigateTo}
          onSearch={handleSearch}
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        
        <main className="flex-grow">
          {currentPage === 'discover' && <DiscoverPage onNavigate={navigateTo} />}
          {currentPage === 'books' && <BooksPage onNavigate={navigateTo} searchQuery={searchQuery} />}
          {currentPage === 'summary' && <BookSummary bookId={selectedBookId} onNavigate={navigateTo} previousPage={previousPage} />}
          {currentPage === 'library' && <MyLibrary onNavigate={navigateTo} />}
          {currentPage === 'premium' && <Premium onNavigate={navigateTo} onSelectPlan={setSelectedPlan} />}
          {currentPage === 'about' && <About />}
          {currentPage === 'profile' && <ProfilePage onNavigate={navigateTo} />}
          {currentPage === 'settings' && <SettingsPage isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />}
          {currentPage === 'collections' && <CollectionsPage onNavigate={navigateTo} />}
          {currentPage === 'collection-detail' && <CollectionDetailPage collectionId={selectedCollectionId} onNavigate={navigateTo} previousPage={previousPage} />}
          {currentPage === 'read-summary' && <ReadSummaryPage bookId={selectedBookId} onNavigate={navigateTo} />}
          {currentPage === 'payment' && <PaymentPage selectedPlan={selectedPlan} onNavigate={navigateTo} />}
          {currentPage === 'completed-books' && <CompletedBooksPage onNavigate={navigateTo} />}
          {currentPage === 'my-favorites' && <MyFavoritesPage onNavigate={navigateTo} />}
          {currentPage === 'continue-reading' && <ContinueReadingPage onNavigate={navigateTo} />}
          {currentPage === 'achievements' && <AchievementsPage onNavigate={navigateTo} />}
        </main>

        <Footer onNavigate={navigateTo} />
      </div>
    </div>
  );
}