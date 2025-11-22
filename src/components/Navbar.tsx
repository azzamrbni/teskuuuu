import { BookOpen, FileText, Library, FolderOpen, Moon, Sun, ChevronDown, User, Settings, CreditCard, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onSearch: (query: string) => void;
  onLogout: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({ currentPage, onNavigate, onSearch, onLogout, isDarkMode, onToggleDarkMode }: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const navItems = [
    { name: 'Discover', page: 'discover' as Page, icon: BookOpen },
    { name: 'Books', page: 'books' as Page, icon: FileText },
    { name: 'Collections', page: 'collections' as Page, icon: FolderOpen },
    { name: 'My Library', page: 'library' as Page, icon: Library },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
    setShowSearch(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('discover')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
              <span className="text-white">K</span>
            </div>
            <span className="text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">KUALALA</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'text-[#E3762B] bg-[#FDC448]/10'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Premium Button */}
            <Button
              onClick={() => onNavigate('premium')}
              className="hidden sm:flex bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
              size="sm"
            >
              Upgrade Premium
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">K</span>
                  </div>
                  <ChevronDown size={16} className="text-gray-600 dark:text-gray-400 hidden sm:block" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-2 py-2">
                  <p className="text-sm text-gray-900 dark:text-white">Pengguna Kualala</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">user@kualala.com</p>
                </div>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem onClick={() => onNavigate('profile')} className="dark:text-gray-300 dark:hover:bg-gray-700">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('settings')} className="dark:text-gray-300 dark:hover:bg-gray-700">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem onClick={() => onNavigate('premium')} className="dark:text-gray-300 dark:hover:bg-gray-700">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Upgrade to Premium
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('about')} className="dark:text-gray-300 dark:hover:bg-gray-700">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem className="text-red-600 dark:hover:bg-gray-700" onClick={() => setShowLogoutDialog(true)}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-1 pb-3 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap text-sm ${
                currentPage === item.page
                  ? 'text-[#E3762B] bg-[#FDC448]/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <item.icon size={16} />
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Logout Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Log Out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out? You will be redirected to the login page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onLogout}>Log Out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}