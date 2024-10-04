import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Signout from './components/Signout';
import Dashboard from './components/Dashboard';
import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import NoAccess from './components/NoAccess';
import Loading from './components/Loading';
import Prompt from './components/Prompt';

function App() {

  const {User, isAuth} = useContext(DataContext)

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 p-0'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signout' element={<Signout/>} />

            {/* Admin Route */}
            {
              (User===null)?
              <Route path='/dashboard' element={(isAuth!==null&&isAuth===false)?<Prompt/>:<Loading/>} />:
              <Route path='/dashboard' element={(User.isAdmin===true)?<Dashboard/>:<NoAccess/>} />
            }
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
