import Image from 'next/image'
import React from 'react'

function ProfileSheet() {
  return (
    <Image
      src="/profile.avif"
      alt="Profile Icon"
      className="ml-4 h-10 w-10 rounded-full"
      width={40}
      height={40}              
      />
  )
}

export default ProfileSheet