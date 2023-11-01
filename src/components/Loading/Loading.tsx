import React from 'react'

import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
        <div className={styles.loaderText}>
            Loading
        </div>
    </div>
  )
}

export default Loading