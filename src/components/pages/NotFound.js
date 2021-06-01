import React from 'react'
import pikachu from 'assets/img/pikachu.png'
import { useHistory } from 'react-router-dom'
import { FullPage, PrimaryButton } from 'assets/cssComponent/global'

export default function NotFound() {
  const { push } = useHistory()

  return (
    <FullPage>
      <img src={pikachu} alt="none" style={{ maxWidth: '200px' }}></img>
      <p>Halaman yang anda inginkan tidak ditemukan</p>
      <PrimaryButton onClick={() => push('/')}>Kembali</PrimaryButton>
    </FullPage>
  )
}
