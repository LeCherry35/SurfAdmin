import React from 'react'
import styles from './NavBar.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const NavBar = () => {
    const {isAuth} = useTypedSelector(state =>state.user)
    let navigate = useNavigate();
  return (
    <div className={styles.navBar_container}>
            <div onClick={() => navigate('/auth')} className={styles.navBar_container__button}>
                {isAuth ? 'logout' : 'login'}
            </div>
            {isAuth &&
              <div onClick={() => navigate('/day')} className={styles.navBar_container__button}>
              prototype
              </div>
            }
            {isAuth &&
              <div onClick={() => navigate('/settings')} className={styles.navBar_container__button}>
              settings
              </div>
            }
    </div>
  )
}

export default NavBar