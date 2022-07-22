import { useState } from 'react';
import './SignIn.scss';

export function SignIn({setUserName}) {
  const [nameInput, setNameInput] = useState('');

  function handleSignIn() {
    localStorage.setItem('userName', nameInput);
    
    setUserName(nameInput);
  };

  return (
    <div className="sign-in">
      <a href="#">
        <span>G</span>
        <span>itmeet</span>
      </a>

      <form>
        <h2>Vamos Começar!</h2>
        <p>Digite o nome de usuário que você utiliza para logar no github.</p>

        <fieldset>
          <input type="text" onChange={(event) => setNameInput(event.target.value)}/>
          <button type="button" onClick={() => handleSignIn()}>Entrar</button>
        </fieldset>
      </form>
    </div>
  )
}
