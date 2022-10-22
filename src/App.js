// import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditProfilePage from './pages/EditProfilePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PromptPage from './pages/PromptPage';
import RegistrationPage from './pages/RegistrationPage';



function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register-user" element={<RegistrationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/prompt" element={<PromptPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />

          </Routes>
        </BrowserRouter>

  );
}

export default App;
