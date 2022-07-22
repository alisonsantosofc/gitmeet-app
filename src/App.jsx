import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { RepositoryList } from './components/RepositoryList';
import { SignIn } from './pages/SingIn/SignIn';

import './sass/global.scss';

export function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(localStorage.getItem('userName'));
  }, [])
  
  return (
    <div className={`main-enviroment`}>
      {!userName && <SignIn setUserName={setUserName} />}
      {userName && <Navbar userName={userName} setUserName={setUserName}/>}
      {userName && <RepositoryList userName={userName} />}
    </div>
  );
};
