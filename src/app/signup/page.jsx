// src/app/signup/page.jsx
'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold leading-6',
              card: 'bg-white shadow-sm rounded-lg'
            }
          }}
        />
      </div>
    </div>
  );
}