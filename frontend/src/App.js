import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from './Homepage';
import Create_acc from './Create_acc';
import './stylesheet.css'
import Login_page from './Login_page';
import Welcome_page from './Welcome_page';
import Forgot_password from './Forgot_password';
import New_password from './New_password';
import Rate_card from './Rate_card';
import Drycleaning_service from './Services/Drycleaning_service';
import Washing_Services from './Services/Washing_Services';
import Steam_Iron_Services from './Services/Steam_Iron_Services';
import OnSite_Services from './Services/OnSite_Services';
import Settings from './Settings';
import My_profile from './My_profile';

function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/account' element={<Create_acc />} />
          <Route path='/login' element={<Login_page />} />
          <Route path='/home' element={<Welcome_page/>} />
          <Route path='/Forgot-password' element={<Forgot_password/>} />
          <Route path='/new-password' element={<New_password/>} />
          <Route path='/Rate-card' element={<Rate_card/>} />
          <Route path='/Drycleaning-service' element={<Drycleaning_service/>} />
          <Route path='/Washing-service' element={<Washing_Services/>} />
          <Route path='/Steam-Iron-service' element={<Steam_Iron_Services/>} />
          <Route path='/OnSite-service' element={<OnSite_Services/>} />
          {/* <Route path='/settings' element={<Settings/>} /> */}
          <Route path='/My-profile' element={<My_profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
