import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';

import ListFormPage from './pages/ListFormPage'
import HomePage from './pages/HomePage'
import SavedPage from './pages/SavedPage';
import EditPage from './pages/EditPage';

import { getUser } from './utilities/users-service';

import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={ <HomePage user={user} /> }/>
        <Route path='/create' element={ <ListFormPage user={user} /> }/>
        <Route path = '/saved'element= {<SavedPage user={user} />}/>
        <Route path = '/edit/:id'element= {<EditPage user={user} />}/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
