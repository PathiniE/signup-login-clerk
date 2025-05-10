// src/app/page.jsx
'use client';

import AuthButton from '../app/components/AuthButton';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  const { isSignedIn, userId } = useAuth();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Welcome to the Auth App</h2>
        <p className="mb-6 text-gray-900">
          {isSignedIn
            ? `You are signed in!`
            : 'Please sign in or sign up to continue'}
        </p>
        
        <div className="flex justify-center mb-6">
          <AuthButton />
        </div>
        
        {isSignedIn && (
          <Link 
            href="/dashboard" 
            className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
}