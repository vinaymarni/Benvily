'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { currentUserAtom } from '@/lib/atoms';
import { Scissors } from 'lucide-react';

export function Header() {
  const [currentUser] = useAtom(currentUserAtom);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6" />
          <span className="text-xl font-bold">Benvily</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="text-sm hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/styles" className="text-sm hover:text-accent transition-colors">
            Styles
          </Link>
          <Link href="/salons" className="text-sm hover:text-accent transition-colors">
            Salons
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <span className="text-sm text-muted-foreground">{currentUser.name}</span>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
