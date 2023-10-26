import React, {FC, useState} from 'react'

const LoginForm: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
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
        <button>Login</button>
    </div>
  )
}

export default LoginForm