'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/button';

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  // TODO: Fix hydration warning
  return (
    <Button
      suppressHydrationWarning
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun className="size-[1.2rem]" /> : <Moon className="size-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
