// import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPromptPage from './pages/AddPromptPage';
import EditProfilePage from './pages/EditProfilePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PromptPage from './pages/PromptPage';
import RegistrationPage from './pages/RegistrationPage';
import store from './reduxState';



function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register-user" element={<RegistrationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/prompt" element={<PromptPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/add-prompt" element={<AddPromptPage />} />


          </Routes>
        </BrowserRouter>
    </Provider>

  );
}

export default App;
