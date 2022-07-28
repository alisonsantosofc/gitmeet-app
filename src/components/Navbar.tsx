import { useEffect, useState } from 'react';
import { FaCaretSquareDown } from 'react-icons/fa';

import './Navbar.scss';

interface NavbarProps {
  userName: string;
}

interface User {
  name: string;
  avatar_url: string;
}

export function Navbar(props: NavbarProps) {
  const [users, setUsers] = useState<User[]>([]);
  const user = users[0];
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.userName}`)
    .then(response => response.json())
    .then(data => setUsers([data]));
  }, []);

  function handleDropdown() {
    if (!isOpenDropdown) {
      setIsOpenDropdown(true);
    } else {
      setIsOpenDropdown(false);
    }
  }

  function handleLogoutUser() {
    localStorage.setItem('userName', '');
    
    window.alert('Para completar o logout, por favor recarregue a página do seu navegador!');
  }

  if (user) {
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
    );
  }

  return (
    <nav className="navbar">
      <div className="profile-container">
        <span>Olá, Usuário</span>

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
  );
};