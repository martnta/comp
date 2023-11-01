import Link from 'next/link'
import SignInButton from './SignInButton'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-red-700'>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-100'>
          <li className='text-sm'>
            <Link href='/'>Vanguard Compensation System</Link>
          </li>
          <li className='text-sm'>
            <Link href='/Home'>Home</Link>
          </li>
          <li className='text-sm'>
            <Link href='/Home/policy'>Policies</Link>
          </li>
		  <li className='text-sm'>
            <Link href='/Home/claims'>My Claims</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header