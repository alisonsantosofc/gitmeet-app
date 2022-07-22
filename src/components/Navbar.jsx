import { useEffect, useState } from 'react';
import { FaCaretSquareDown } from 'react-icons/fa';

import './Navbar.scss';

export function Navbar({userName, setUserName}) {
  const [user, setUser] = useState({});
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => setUser(data));
  }, [userName]);

  function handleDropdown() {
    if (!isOpenDropdown) {
      setIsOpenDropdown(true);
    } else {
      setIsOpenDropdown(false);
    }
  }

  function handleLogoutUser() {
    localStorage.setItem('userName', '');
    setUserName('');
  }

  return (
    <nav className="navbar">
      <div className="profile-container">
        <img src={user.avatar_url} alt="avatar" />
        <span>Olá, {user.name}</span>

        <button type="button" onClick={handleDropdown}><FaCaretSquareDown /></button>
        {isOpenDropdown && 
          <div className='dropdown-menu'>
            <button type="button">Perfil</button>
            <button type="button" onClick={handleLogoutUser}>Trocar usuário</button>
            <button type="button" onClick={handleLogoutUser}>Sair</button>
          </div>  
        }
      </div>
      

      <a href="#">
        <span>G</span>
        <span>itmeet</span>
      </a>
    </nav>
  )
};