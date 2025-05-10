// components/ClerkAuthButton.jsx
'use client';

import { useAuth, UserButton } from "@clerk/nextjs";
import Link from 'next/link';

export default function AuthButton() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <Link href="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In
      </Link>
      <Link href="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </Link>
    </div>
  );
}