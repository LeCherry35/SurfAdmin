import React, { useState} from 'react'

import styles from './Settings.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ModalInput from '../ModalComponents/ModalInput/ModalInput'

const Settings = () => {

  const { tracksNumber } = useTypedSelector(state => state.settings)

  const [newTracksNumber, setNewTracksNumber] = useState(tracksNumber)
  
  return (
    <div>
      Tracks number
      Work hours
      <select>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select></div>
  )
}

export default Settings