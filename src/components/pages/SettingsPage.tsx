import { useState } from 'react';
import { Bell, Lock, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
              <Bell className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-xl text-gray-900 dark:text-white">Notifications</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage how you receive updates
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1">Email Notifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive updates via email
                  </p>
                </div>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-lg flex items-center justify-center">
              <Lock className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-xl text-gray-900 dark:text-white">Security</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your password and security settings
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword" className="text-gray-900 dark:text-white">
                Current Password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                placeholder="••••••••"
                className="mt-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <Label htmlFor="newPassword" className="text-gray-900 dark:text-white">
                New Password
              </Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="••••••••"
                className="mt-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-gray-900 dark:text-white">
                Confirm New Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="mt-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <Button
              className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
            >
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}