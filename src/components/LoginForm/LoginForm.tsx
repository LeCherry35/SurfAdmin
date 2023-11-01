import React, {FC, useState} from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { register, logout, login } from '../../store/asyncActions/user';
import ModalButton from '../ModalComponents/ModalButton/ModalButton';
import styles from './LoginForm.module.css'
import ModalInput from '../ModalComponents/ModalInput/ModalInput';
import Loading from '../Loading/Loading';

const LoginForm: FC = () => {
  const dispatch = useTypedDispatch();


  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {isAuth, user, error, isLoading} = useTypedSelector(state => state.user)

  return (
    <div className='modal-container'>
      {isLoading && <Loading/>} 
      {isAuth ? 
        <div className={styles.loginContainer}>
          <ModalButton name='logout' onClick={(e) => {
            e.preventDefault()
            dispatch(logout())
            if (isAuth) setEmail('')
            setPassword('')
          }}
          />
        </div> 
        : <div className={styles.loginContainer}>
          <ModalInput 
              onChange={e => setEmail(e.target.value)} 
              placeholder='email' 
              value={email}
              type='text'
          />
          <ModalInput
              onChange={e => setPassword(e.target.value)} 
              placeholder='password' 
              type='password'
              value={password}
          />
          <ModalButton name="registration" onClick={(e) => {
            e.preventDefault()
            dispatch(register(email, password))
            if (isAuth) setEmail('')
            setPassword('')
            
          }}
          />
          <ModalButton name='login' onClick={(e) => {
            e.preventDefault()
            dispatch(login(email, password))
            if (isAuth) setEmail('')
            setPassword('')
          }}
          />

        </div>
      }
    </div>
  )
}

export default LoginForm