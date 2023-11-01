'use client'
import React from 'react';

const ErrorPage = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>
          You need to be logged in to view this <span className='text-red-500'>page</span>
        </h1>
      </div>
    </section>
  );
};

export default ErrorPage;