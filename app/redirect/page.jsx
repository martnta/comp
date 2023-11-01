'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import LoadingSpinner from '@/components/loading'

const RedirectPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      // Assuming the user's role is stored in session.user.role
      switch (session.user.role) {
        case 'admin':
          router.push('/admin')
          break
        case 'officer':
          router.push('/officer')
          break
        default:
          router.push('/Home')
      }
    } else {
      router.push('/error')
    }
  }, [status, session])

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  // Add a conditional check to prevent access to claim page if not logged in
  if (status !== 'authenticated') {
    router.push('/error')
    return null // or any other action you want to take, such as showing a message or redirecting
  }

  return <LoadingSpinner />
}

export default RedirectPage