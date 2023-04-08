import GlobalStyles from './assets/styles/GlobalStyles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/welcome' element={<WelcomeScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
