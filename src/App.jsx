import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppLayout from './AppLayout';
import Home from './Components/HomePage';
import LoginPage from './Components/LoginPage';
// Import other pages or components here if needed
import Chats from './Components/ChatPage/index';
// import Groups from './Components/Groups';
// import Call from './Components/Call';
import Contacts from './Components/ContactsPage/index';
// import Settings from './Components/Settings';

const App = () => {
  return (
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<Home />} />
            {/* Uncomment and add the routes as needed */}
             <Route path="/chats" element={<Chats />} />
            {/* <Route path="/groups" element={<Groups />} />
            <Route path="/call" element={<Call />} /> */}
            <Route path="/contacts" element={<Contacts />} />
            {/* <Route path="/settings" element={<Settings />} />  */}
          </Routes>
        </AppLayout>
      </Router>
    );
};

export default App;
