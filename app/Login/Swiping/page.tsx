import React from 'react'
import ListAllImages from "./getImage";
import Link from 'next/link'


const Swiping = () => {
  let x = 0
  return (
    <main>
      <div>
        <ListAllImages/>
        <Link href="/">Home</Link>
        <Link href="/Login/Swiping">Swiping</Link>
        <Link href="/Login/Profile">Profile</Link>
      </div>
    </main>
  )
}

export default Swiping