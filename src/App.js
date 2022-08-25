/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderHome from './components/HeaderHome/HeaderHome';
import DemoChonXe from './pages/HookDemo/UseStateDemo/DemoChonXe';

function App() {
  return (
    <div className="App">
      < HeaderHome />
      < DemoChonXe />
      < Outlet />
      
    </div>
  );
}

export default App;
