import React, {FC, useState} from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { register } from '../../store/asyncActions/user';

const LoginForm: FC = () => {
  const dispatch = useTypedDispatch();


  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {isAuth, user, error, isLoading} = useTypedSelector(state => state.user)

  return (
    <div>
          loginForm
        <input 
            onChange={e => setEmail(e.target.value)} 
            placeholder='email' 
            type='text'
            value={email}
        />
        <input 
            onChange={e => setPassword(e.target.value)} 
            placeholder='password' 
            type='text'
            value={password}
        />
        <button onClick={(e) => {
                        e.preventDefault()
                        dispatch(register(email, password))
                        if (isAuth) setEmail('')
                        setPassword('')
        }}
        >Registration</button>
    </div>
  )
}

export default LoginForm