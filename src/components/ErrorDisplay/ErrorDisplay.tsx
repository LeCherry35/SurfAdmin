import React, { useEffect } from 'react'
import styles from './ErrorDisplay.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const ErrorDisplay = () => {

    const {error} = useTypedSelector(state => state.user)
    
    

  return (
    <div className={styles.errorDisplay_container}>
        {error}
    </div>
  )
}

export default ErrorDisplay