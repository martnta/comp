'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

function HomeLand() {
  const {data: session} = useSession()
  return (
    <section className='py-24 bg-gray-100'>
      <div className='bg-[url("/images/friendship.jpg")] bg-cover bg-center h-96 container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='text-center pt-10 text-white'>
        <motion.h1
            className='text-2xl font-bold mb-4'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <p className='text-4xl '>Welcome to the <span className='text-red-700'>Vanguard</span> /n Compensation Sytem</p>
        </motion.h1>
        <motion.h2
            className='text-2xl font-bold mb-4'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque molestias, molestiae, fuga tenetur atque magni, exercitationem debitis amet quis modi sint saepe! Exercitationem distinctio praesentium maiores quia, illum alias.</p>
        </motion.h2>
        {session?.user?.name && (
            <motion.div
              className='absolute bottom-0 left-0 ml-4 mb-4'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className='text-red-700'>You are logged in as: <span className='text-orange-600'>{session.user.name}</span></p>
            </motion.div>
          )}
            <motion.button
              className='mt-4 bg-red-700 text-white px-6 py-3 rounded flex items-center mx-auto'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Lead more
              <motion.div
                className='ml-2'
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRightCircleIcon className='h-6 w-6' />
              </motion.div>
            </motion.button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <div className='w-full h-64 relative mb-4'>
              <Image src="/images/mart.jpg" alt="Card 1" layout="fill" objectFit="cover"/>
            </div>
            <h3 className='text-xl font-bold'>Card 1</h3>
            <p className='mt-4'>Some information about this card.</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <div className='w-full h-64 relative mb-4'>
              <Image src="/images/vangurad.jpeg" alt="Card 2" layout="fill" objectFit="cover"/>
            </div>
            <h3 className='text-xl font-bold'>Card 2</h3>
            <p className='mt-4'>Some information about this card.</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <div className='w-full h-64 relative mb-4'>
              <Image src="/images/friendship.jpg" alt="Card 3" layout="fill" objectFit="cover"/>
            </div>
            <h3 className='text-xl font-bold'>Card 3</h3>
            <p className='mt-4'>Some information about this card.</p>
          </div>
        </div>
      
    </section>
  )
}

export default HomeLand