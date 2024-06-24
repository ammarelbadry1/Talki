import './globals.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Root } from './pages/Root';
import { Signup } from './pages/Signup';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/chats/:id' element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
