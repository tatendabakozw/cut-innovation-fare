import React from 'react'

type Props = {}

function Success({}: Props) {
  return (
    <div className='w-full h-full grid items-center justify-center content-center min-h-screen'>
        <p className='max-w-4xl mx-auto w-full bg-green-600 text-white p-4 rounded font-semibold'>Thank you for registering. We will get back to you through your email.</p>
    </div>
  )
}

export default Success