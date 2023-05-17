import GlobalStyles from './assets/styles/GlobalStyles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import AuthenticationScreen from './pages/AuthenticationScreen';
import ChangePasswordScreen from './pages/ChangePasswordScreen';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/welcome' element={<WelcomeScreen/>}/>
          <Route path='/authentication/:type' element={<AuthenticationScreen/>}/>
          <Route path='/change/password' element={<ChangePasswordScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
