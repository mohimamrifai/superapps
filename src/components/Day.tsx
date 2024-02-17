import React from 'react'

export default function Day() {

    const date = new Date()
  return (
    <>
    {date.getDate().toString.length === 1 ? date.getDate() : `0${date.getDate()}` }
    </>
  )
}
