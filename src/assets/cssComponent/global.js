import styled from '@emotion/styled'

export const Button = styled.button`
  font: inherit;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
export const PrimaryButton = styled(Button)`
  color: white;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? 'gray;' : '#00838d;')}
  border-color: #f2f8f9;
  transition: all 0.6s ease;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '' : '#006b74;')};
  }
  width: ${(props) => (props.w100 ? '100%' : '')};
`
export const DisabledButton = styled(Button)`
  color: white;
  background-color: gray;
  transition: all 0.6s ease;
  width: ${(props) => (props.w100 ? '100%' : '')};
`

export const DangerButton = styled(Button)`
  color: white;
  cursor: pointer;
  background-color: red;
  border-color: #f2f8f9;
  &:hover {
    background-color: #ff034d;
  }
  width: ${(props) => (props.w100 ? '100%' : '')};
`
export const Title = styled.h2`
  text-transform: capitalize;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const Badge = styled.div`
  background-color: #f2f8f9;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  padding: ${({ type }) => (type ? '0.5em 1em' : '1em 2em')};
  ${(props) => ({ width: props.width })}
  z-index: 0;
  max-width: 100%;
  margin-right: ${(props) => (props.last ? '' : '0.5em')};
  transition: all 0.3s ease-out;
`
export const FlexGroup = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  align-items: ${({ centered }) => (centered ? 'center' : '')};
  justify-content: ${({ centered }) => (centered ? 'center' : '')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : '')};
`
export const CardGroup = styled.div`
  cursor: pointer;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  padding: 1.5em 3em;
  z-index: 0;
  transition: all 0.3s ease-out;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '')};
  ${({ primary }) => ({
    backgroundColor: '#f2f8f9',
  })}
  &:hover {
    ${({ primary }) =>
      primary
        ? `z-index: 100;
      border: 1px solid #cccccc;
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      background-color: white;`
        : ''}
  }

  & .title {
    margin: 0;
    text-transform: capitalize;
  }
  & .banner {
    max-width: 200px;
  }
`

export const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & div {
    margin: 0.5em;
  }
  & a {
    text-decoration: none;
    color: black;
  }
`

export const FlexItem = styled.div`
  margin-top: 1em;
  ${({ width }) => ({ width: width })};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : '')};
`

export const TextCenter = styled.div`
  text-align: center;
`
export const FullPage = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & p {
    font-size: 18px;
  }
`

export const Content = styled.div`
  margin: 2em 0;
  padding: 0 80px;
  padding-top: 42px;
  position: relative;

  @media only screen and (max-width: 860px) {
    margin: 0.5em 0;
    padding: 0 20px;
    padding-top: 62px;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  gap: 10px;
`
export const ModalGroup = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  padding-top: 200px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  & input {
    font: inherit;
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    padding: 16px 10px;
    line-height: 24px;
  }
`
export const ModalContent = styled.div`
  text-align: ${({ centered }) => (centered ? 'center' : '')};
  border-radius: 10px;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
`
