import React from 'react';
import Card from './card';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card>
        <h1 className="text-xl font-bold">🚀 Yearbook Starter</h1>
        <p className="mt-2 text-gray-600">Edit this page to get started!</p>
      </Card>
    </div>
  );
};

export default HomePage;
