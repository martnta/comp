import Provider from '@/components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vanguard Compensation System',
  description: 'Only for customers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
         <Header/>
        <main className = 'grow'>{children}</main>
        <Footer/>
        </Provider>
       
        </body>
    </html>
  )
}
