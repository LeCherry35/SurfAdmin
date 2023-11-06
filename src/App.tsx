import React, { useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import NavBar from './components/NavBar/NavBar';
import { useTypedDispatch } from './hooks/useTypedDispatch';
import { checkAuth } from './store/asyncActions/user';
import Day from './components/Day/Day';
import Settings from './components/Settings/Settings';

function App() {

  const dispatch = useTypedDispatch()

  useEffect(() => {
    
    if(localStorage.getItem('token')){
      dispatch(checkAuth())
    }
  }, [dispatch])

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <ErrorDisplay/>
        <Routes>
        <Route path='/auth' element={<LoginForm/>} />
        <Route path='/day' element={<Day/>} />
        <Route path='/settings' element={<Settings/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
