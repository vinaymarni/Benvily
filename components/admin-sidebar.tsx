'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Scissors, BarChart3, Users, Building2, Scissors as StyleIcon, LogOut } from 'lucide-react';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom, currentUserAtom } from '@/lib/atoms';
import { useRouter } from 'next/navigation';

const adminLinks = [
  { href: '/admin', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/salons', label: 'Salons', icon: Building2 },
  { href: '/admin/services', label: 'Services', icon: Scissors },
  { href: '/admin/stylists', label: 'Stylists', icon: Users },
  { href: '/admin/styles', label: 'Styles', icon: StyleIcon },
  { href: '/admin/bookings', label: 'Bookings', icon: StyleIcon },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [, setCurrentUser] = useAtom(currentUserAtom);
  const router = useRouter();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    router.push('/');
  };

  return (
    <aside className="w-64 border-r border-border bg-background min-h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6" />
          <span className="font-bold text-lg">Benvily</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {adminLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}>
              <Button
                variant={isActive ? 'default' : 'ghost'}
                className="w-full justify-start gap-3"
                size="lg"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <Button
          variant="outline"
          className="w-full justify-start gap-3"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
