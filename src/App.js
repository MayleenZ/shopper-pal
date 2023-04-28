import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';

import CustomPage from './pages/CustomPage'
import HomePage from './pages/HomePage'
import ReadyTemplatePage from './pages/ReadyTemplatePage'
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
        <Route path='/custom' element={ <CustomPage /> }/>
        <Route path='/home' element={ <HomePage /> }/>
        <Route path = '/saved'element= {<SavedPage/>}/>
        <Route path = '/pre-made' element={<ReadyTemplatePage/>} />
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
