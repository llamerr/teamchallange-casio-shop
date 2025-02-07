'use client';

import { Settings, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useCookie from 'react-use-cookie';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/libs/utils';

type CookiePreferences = {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

export function CookieConsent({
  initialState,
}: {
  initialState: string;
}) {
  // useCookie does not support server first render, so we have to use a param here
  const [isContentShown, setIsContentShown] = useCookie('consent.set', initialState);

  // TODO: check for user auth and sync cookies with db if necessary

  const [isOpen, setIsOpen] = useState(isContentShown !== 'true');
  const [isCustomizeView, setIsCustomizeView] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  const handleAllowAll = () => {
    setPreferences({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    });
    setIsOpen(false);
    setIsContentShown('true');
  };

  const handleAllowNecessary = () => {
    setPreferences({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    });
    setIsOpen(false);
    setIsContentShown('true');
  };

  const handleAllowSelection = () => {
    setIsOpen(false);
    setIsContentShown('true');
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsCustomizeView(false);
    }
  };

  return (
    <div className="fixed bottom-16 left-4 z-50">
      <Button variant="outline" size="icon" className="size-10 shadow-lg" onClick={togglePopup}>
        <Settings className="size-5" />
      </Button>

      <div
        className={cn(
          'absolute bottom-14 left-0 w-[380px] transform transition-all duration-300 ease-in-out',
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none',
        )}
      >
        <div className="relative rounded-lg bg-white p-6 shadow-xl">
          <Button
            onClick={() => setIsCustomizeView(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="size-4" />
          </Button>

          {!isCustomizeView
            ? (
                <>
                  <h2 className="mb-3 text-xl font-semibold">Manage your Cookie Preferences</h2>
                  <p className="mb-6 text-gray-600">
                    We use cookies to enhance your browsing experience, provide personalized content, and analyze our
                    website traffic. You can adjust your cookie preferences to control which types of cookies you consent to
                    use.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={handleAllowAll}>
                      Allow All Cookies
                    </Button>
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={handleAllowNecessary}>
                      Allow Only Necessary
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setIsCustomizeView(true)}>
                      Customize Settings
                    </Button>
                  </div>
                </>
              )
            : (
                <>
                  <h2 className="mb-6 text-xl font-semibold">Customize your Cookie Settings:</h2>
                  <div className="mb-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="necessary" className="text-gray-700">
                        Necessary
                      </Label>
                      <Switch id="necessary" checked={preferences.necessary} disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="preferences" className="text-gray-700">
                        Preferences
                      </Label>
                      <Switch
                        id="preferences"
                        checked={preferences.preferences}
                        onCheckedChange={checked => setPreferences(prev => ({ ...prev, preferences: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="statistics" className="text-gray-700">
                        Statistics
                      </Label>
                      <Switch
                        id="statistics"
                        checked={preferences.statistics}
                        onCheckedChange={checked => setPreferences(prev => ({ ...prev, statistics: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing" className="text-gray-700">
                        Marketing
                      </Label>
                      <Switch
                        id="marketing"
                        checked={preferences.marketing}
                        onCheckedChange={checked => setPreferences(prev => ({ ...prev, marketing: checked }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={handleAllowAll}>
                      Allow All Cookies
                    </Button>
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={handleAllowSelection}>
                      Allow Selection
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleAllowNecessary}>
                      Deny
                    </Button>
                  </div>
                </>
              )}

          <p className="mt-4 text-center text-sm text-gray-500">
            Please review our
            {' '}
            <Link href="/privacy-policy" className="text-gray-900 underline">
              Privacy Policy
            </Link>
            {' '}
            for more details on how we use cookies and data.
          </p>
        </div>
      </div>
    </div>
  );
}
