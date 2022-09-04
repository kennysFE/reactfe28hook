/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseStateDemo from './pages/HookDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HookDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';
// setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoNumber from './pages/HookDemo/UseRedux/DemoNumber';
import DemoFaceBookApp from './pages/HookDemo/UseRedux/DemoFaceBook/DemoFaceBookApp';
import ReactForm from './pages/HookDemo/ReactForm/ReactForm';
import Profile from './pages/HookDemo/ReactForm/Profile';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='detail' >
            <Route path=':id' element={<Detail />} ></Route>
          </Route>
          <Route path='usestate' element={<UseStateDemo />}></Route>
          <Route path='useeffect' element={<UseEffectDemo />}></Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='usememodemo' element={<UseMemoDemo />}></Route>
          <Route path='userefdemo' element={<UseRefDemo />}></Route>
          <Route path='useredux' element={<DemoNumber />}></Route>
          <Route path='usedemofacebook' element={<DemoFaceBookApp />}></Route>
          <Route path='usenavigate' element={<ReactForm />}></Route>
          <Route path='useprofile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
