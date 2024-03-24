import React from 'react'
import Link from 'next/link'

const Profile = () => {
  return (
    <main>
      <div>Profile</div>
      <Link href="/">Home</Link>
      <Link href="/Login/Swiping">Swiping</Link>
    </main>
  )
}

export default Profile