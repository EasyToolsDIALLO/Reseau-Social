import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import UserProfil from './pages/UserProfil';
import {Pin} from './container/index'
import {Feed, CreatePin,PinDetails,Search} from './components/index'

function App() {
  
  return (
      <Routes>
        <Route path='login' element={<Login />} />

        <Route path='/' element={<Home />} >
          <Route path='home' element={<Pin />} >
            <Route path='search' element={<Search/>} />
            <Route path='pin-detail/:pinID' element={<PinDetails />} />
            <Route path='' element={<Feed />} />
          </Route>
          <Route path='categorie/:categorieID' element={<Pin />} >
            <Route path='create-pin' element={<CreatePin />} />
            <Route path='search' element={<Search/>} />
            <Route path='pin-detail/:pinID' element={<PinDetails />} />
            <Route path='' element={<Feed />} />
          </Route>
          <Route path='user-profil/:UserD' element={<UserProfil />} />
        </Route>

        
      </Routes>

    
  );
}

export default App;
