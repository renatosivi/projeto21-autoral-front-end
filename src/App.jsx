import GlobalStyles from './assets/styles/GlobalStyles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import AuthenticationScreen from './pages/AuthenticationScreen';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/welcome' element={<WelcomeScreen/>}/>
          <Route path='/authentication' element={<AuthenticationScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
