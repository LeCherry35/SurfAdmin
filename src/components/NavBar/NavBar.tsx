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
        {
            // location.pathname !== '/auth' && 
            <div onClick={() => navigate('/auth')} className={styles.navBar_container__button}>
                {isAuth ? 'logout' : 'login'}
            </div>
        }
    </div>
  )
}

export default NavBar