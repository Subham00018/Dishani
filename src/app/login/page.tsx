
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppLogo } from '@/components/AppLogo';
import { Mail, Phone, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // In a real app, you'd handle authentication here.
    // For this scaffold, we'll just simulate login and redirect.
    console.log(`Logging in with ${loginMethod}: ${identifier}, Password: ${password}`);
    // Simulate successful login by setting a flag or redirecting
    // For simplicity, directly navigating. A real app would use Auth context/session.
    localStorage.setItem('isLoggedIn', 'true'); // Simple flag for demo
    router.push('/colleges'); // Redirect to /home or /colleges as per previous setup
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="items-center text-center">
          <AppLogo appName="EduCompare India" className="h-12 w-12" appNameClassName="text-3xl" />
          <CardTitle className="mt-4 text-2xl font-semibold">Welcome Back!</CardTitle>
          <CardDescription>Sign in to discover and compare top colleges.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2 mb-6">
              <Button
                type="button"
                variant={loginMethod === 'email' ? 'default' : 'outline'}
                onClick={() => {
                  setLoginMethod('email');
                  setIdentifier(''); // Clear identifier when switching
                  setPassword(''); // Clear password when switching
                }}
                className="flex-1"
              >
                <Mail className="mr-2 h-4 w-4" /> Email
              </Button>
              <Button
                type="button"
                variant={loginMethod === 'phone' ? 'default' : 'outline'}
                onClick={() => {
                  setLoginMethod('phone');
                  setIdentifier(''); // Clear identifier when switching
                  setPassword(''); // Clear password when switching
                }}
                className="flex-1"
              >
                <Phone className="mr-2 h-4 w-4" /> Phone
              </Button>
            </div>

            {loginMethod === 'email' ? (
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Explore top colleges. Your future starts here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
