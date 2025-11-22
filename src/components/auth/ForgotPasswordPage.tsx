import { useState } from 'react';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type Page = 'landing' | 'login' | 'signup' | 'forgot-password';

interface ForgotPasswordPageProps {
  onNavigate: (page: Page) => void;
}

export function ForgotPasswordPage({ onNavigate }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send reset password email here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex">
        {/* Left Side - Success Message */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-full mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Check your email
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We've sent a password reset link to <strong>{email}</strong>
            </p>

            <div className="bg-[#FDC448]/10 dark:bg-[#FDC448]/5 border border-[#FDC448]/30 rounded-xl p-4 mb-8">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 py-6"
              >
                Try another email
              </Button>
              <Button
                onClick={() => onNavigate('login')}
                variant="outline"
                className="w-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-6"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Branding */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#FDC448] to-[#E3762B] items-center justify-center p-12">
          <div className="text-center text-white max-w-md">
            <div className="text-8xl mb-8">🔐</div>
            <h2 className="text-4xl mb-4">Secure Your Account</h2>
            <p className="text-xl text-white/90">
              We're here to help you get back to reading your favorite book summaries.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Button
            onClick={() => onNavigate('login')}
            variant="ghost"
            className="mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Login
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">K</span>
            </div>
            <span className="text-2xl tracking-tight text-gray-900 dark:text-white">KUALALA</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
            Forgot password?
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            No worries! Enter your email and we'll send you a reset link.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-900 dark:text-white">Email</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 py-6"
            >
              Send reset link
            </Button>
          </form>

          {/* Back to Login Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            Remember your password?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-[#E3762B] hover:text-[#E3762B]/80"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#FDC448] to-[#E3762B] items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <div className="text-8xl mb-8">🔑</div>
          <h2 className="text-4xl mb-4">Reset Password</h2>
          <p className="text-xl text-white/90">
            Don't worry, it happens! We'll help you reset your password quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
