import { FullPage } from 'assets/cssComponent/global'
import spinner from 'assets/img/spinner.gif'
import React from 'react'

export default function LoadingScreen() {
  return (
    <FullPage>
      <img src={spinner} alt="spinner" style={{ maxWidth: '200px' }}></img>
      <div>Sedang Mengambil Data...</div>
    </FullPage>
  )
}
