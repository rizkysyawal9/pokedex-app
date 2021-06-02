import React, { useContext, useState } from 'react'
import ActionContext from 'context/action/actionContext'
import PokemonContext from 'context/pokemon/pokemonContext'
import spinner from 'assets/img/spinner.gif'
import { useHistory } from 'react-router-dom'
import {
  ModalGroup,
  ModalContent,
  DangerButton,
  PrimaryButton,
  ButtonGroup,
  Title,
} from 'assets/cssComponent/global'

const Modal = () => {
  const actionContext = useContext(ActionContext)
  const pokemonContext = useContext(PokemonContext)
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    setNickName('')
    actionContext.setModal(false)
  }

  const [nickname, setNickName] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setNickName(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setNickName('')
    await pokemonContext.savePokemon(nickname)
  }

  const handleRedirect = (event) => {
    event.preventDefault()
    actionContext.setModal(false)
    history.push('/')
  }

  const { show, type, title, message } = actionContext.modal
  if (!show) {
    return null
  } else {
    if (type === 'confirmation') {
      return (
        <ModalGroup>
          <ModalContent>
            <Title>{title}</Title>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                value={nickname}
                placeholder="Berikan nama pokemonmu"
              ></input>
              <ButtonGroup>
                <PrimaryButton w100 disabled={!nickname} type="submit">
                  Simpan
                </PrimaryButton>
                <DangerButton w100 onClick={handleClick}>
                  Lepaskan
                </DangerButton>
              </ButtonGroup>
            </form>
          </ModalContent>
        </ModalGroup>
      )
    } else if (type === 'redirect') {
      return (
        <ModalGroup>
          <ModalContent>
            <Title>{title}</Title>

            <p>{message}</p>
            <PrimaryButton w100 onClick={handleRedirect}>
              Kembali
            </PrimaryButton>
          </ModalContent>
        </ModalGroup>
      )
    } else if (type === 'failed' || type === 'success') {
      return (
        <ModalGroup>
          <ModalContent>
            <Title>{title}</Title>
            <p>{message}</p>
            <PrimaryButton w100 onClick={handleClick}>
              Close
            </PrimaryButton>
          </ModalContent>
        </ModalGroup>
      )
    } else {
      return (
        <ModalGroup>
          <ModalContent centered>
            <Title>{title}</Title>
            <img
              src={spinner}
              alt="spinner"
              style={{ maxWidth: '100px' }}
            ></img>
            <p>{message}</p>
          </ModalContent>
        </ModalGroup>
      )
    }
  }
}

export default Modal
