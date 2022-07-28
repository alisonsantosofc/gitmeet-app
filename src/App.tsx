import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { RepositoryList } from './components/RepositoryList';
import { SignIn } from './pages/SingIn/SignIn';

import './sass/global.scss';

export function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const localUserName = localStorage.getItem('userName');
    
    if (localUserName) {
      setUserName(localUserName);
    }
  }, []);
  
  return (
    <div className={`main-enviroment`}>
      {!userName && <SignIn setUserName={setUserName} />}
      {userName && <Navbar userName={userName} />}
      {userName && <RepositoryList userName={userName} />}
    </div>
  );
};
