import { useEffect} from 'react'
import { Outlet, NavLink } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import './index.css'
import styled from "styled-components";

const Navigation = styled(NavLink)`
  padding-bottom: 50px;
  font-size: 20px;
`;

const NavStyled = styled.nav`
  display: flex;
  gap: 35px;
`;



function App() {
  const theme = useSelector((state) => state.theme)
  useEffect(() => {
  document.body.className = theme; 
}, [theme]);



  return (
    <>
      <NavStyled>
        <Navigation to="">Головна</Navigation>
        <Navigation to="Posts">Пости</Navigation>
      </NavStyled>
      <Outlet />
    
      </>
    )
}

export default App
