'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home'); // Updated to redirect to /home
  }, [router]);

  return null; // Or a loading spinner
}
