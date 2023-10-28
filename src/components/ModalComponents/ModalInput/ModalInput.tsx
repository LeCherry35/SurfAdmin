import React from "react";

import styles from './ModalInput.module.css'

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    disabled?: boolean
    placeholder: string
    value: string
    type: string
}

const ModalInput :React.FC<Props>= ({onChange, disabled = false, placeholder, value, type = 'text'}) => {
  return (
    <div >
        <input className={styles.inputContainer}
            onChange={onChange}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            type={type}
        />
    </div>
  )
}

export default ModalInput