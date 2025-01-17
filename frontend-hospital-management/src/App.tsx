import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/singup';
import SignIn from './components/SignIn/singin';
import { Inbox } from './pages/Inbox/inbox';
import PasswordGeneral from './components/Password/password';
import DataGridDemo from './components/List/list';
import RedefinePassword from './components/RedefinePassword/redefinePassword';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/resetPassword' element={<RedefinePassword />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/lista' element={<DataGridDemo />} />
          <Route path='/senha' element={<PasswordGeneral />} />
          <Route path='*' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
