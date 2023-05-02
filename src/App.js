import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';

import TemplateFormPage from './pages/TemplateFormPage'
import Homepage from './pages/Homepage'
import SavedPage from './pages/SavedPage';

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
        <Route path='/home' element={ <Homepage /> }/>
        <Route path='/create' element={ <TemplateFormPage /> }/>
        <Route path = '/saved'element= {<SavedPage/>}/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
