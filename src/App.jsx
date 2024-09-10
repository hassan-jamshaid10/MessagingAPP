import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppLayout from './Layouts/AppLayout/index';
import Home from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage/index';
import Chats from './Components/ChatPage/index';
import Contacts from './Components/ContactsPage/index';
import CallPage from './Components/CallLogPage/index';
import GeminiPage from './Components/GeminiChatbot/index';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// UnprotectedRoute component
const UnprotectedRoute = ({ children }) => {
  return children; // No authentication check required
};

// App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Home />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chats"
          element={
            <UnprotectedRoute>
              <AppLayout>
                <Chats />
              </AppLayout>
            </UnprotectedRoute>
          }
        />
        <Route
          path="/chats/:chatId"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Chats />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Contacts />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/call"
          element={
            <ProtectedRoute>
              <AppLayout>
                <CallPage />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/gemini"
          element={
            <ProtectedRoute>
              <AppLayout>
                <GeminiPage />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;
