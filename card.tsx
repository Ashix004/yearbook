import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-300 p-4 shadow-md bg-white max-w-md mx-auto mt-10">
      {children}
    </div>
  );
}