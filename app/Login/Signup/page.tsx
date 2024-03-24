import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <main>
      <div>SignUp</div>
      <Link href="/">Home</Link>
      <Link href="/Login/Swiping">Swiping</Link>
      <Link href="/Login/Profile">Profile</Link>
    </main>
  )
}

export default Signup