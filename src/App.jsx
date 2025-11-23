import { useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { set } from './slices/themeSlice'

import Form from './componets/page'

import './index.css'





function App() {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
  document.body.className = theme; 
}, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(set(next))
  }

  return (
    <>
      <Form />
      <button className = 'buttonTheme' onClick={handleChange}>
        Змінити тему
      </button>
      </>
    )
}

export default App
