import HomeLand from './Home/page'
import { useSession } from 'next-auth/react'


export default function Home() {
 
  return (
    <div className="flex flex-col items-center justify-start min-h-[100vh]">
      <HomeLand/>
    </div>
  )
}
