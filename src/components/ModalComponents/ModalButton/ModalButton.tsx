import React from 'react'

import classes from './ModalButton.module.css'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    disabled?: boolean
    name: string

}
const ModalButton: React.FC<Props> = ({ onClick, disabled = false, name}) => {
  return (
    <button 
        className={classes.modalButton_container} 
        onClick={onClick} 
        disabled={disabled}
    >{name}</button>
  )
}

export default ModalButton