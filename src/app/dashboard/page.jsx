// src/app/dashboard/page.jsx
'use client';

import { useAuth, UserProfile } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ClerkAuthButton from '../../../components/ClerkAuthButton';

export default function Dashboard() {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/signin');
    }
  }, [isLoaded, isSignedIn, router]);
  
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!isSignedIn) {
    return null;
  }
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">Dashboard</h2>
        <ClerkAuthButton />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-medium mb-2 text-gray-700">Welcome to your dashboard!</h3>
        <p className="text-black">
          You are now signed in.
        </p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4 text-gray-700">Your Profile</h3>
        <UserProfile 
          appearance={{
            elements: {
              card: 'bg-white shadow-sm rounded-lg',
              navbar: 'bg-gray-100'
            }
          }}
        />
      </div>
    </div>
  );
}