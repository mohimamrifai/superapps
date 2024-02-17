import React from 'react'

const monthsId = ["januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

export default function Month() {
    const date = new Date()
  return (
    <>
    {monthsId[date.getMonth()]}
    </>
  )
}
