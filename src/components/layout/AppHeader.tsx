
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AppLogo } from '@/components/AppLogo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, LogOut, Home, GraduationCap, ArrowLeftRight, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/colleges', label: 'Colleges', icon: GraduationCap },
  { href: '/compare', label: 'Compare', icon: ArrowLeftRight },
  { href: '/help-support', label: 'Help', icon: HelpCircle },
];

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.replace('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/home" className="mr-6 flex items-center space-x-2">
            <AppLogo appName="EduCompare" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 w-[300px]">
            <SheetHeader className="p-4 text-left">
               <SheetTitle>
                 <Link href="/home" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <AppLogo appName="EduCompare India" />
                 </Link>
               </SheetTitle>
               <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
            </SheetHeader>
            <div className="flex h-full flex-col px-2 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        {/* App Logo for mobile centered (when menu icon is present) */}
        <div className="flex flex-1 items-center justify-start md:hidden">
          <Link href="/home" className="flex items-center space-x-2">
            <AppLogo appName="EduCompare" appNameClassName='text-lg' />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" onClick={handleLogout} className="hidden md:inline-flex">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
