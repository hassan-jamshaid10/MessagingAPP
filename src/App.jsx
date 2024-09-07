import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/SideBar/index';
import Home from './Components/HomePage';

const App = () => {
  return (
   // <Home/>
    <Router>
     
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/chats" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/call" element={<Call />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </main>
    </Router>
  );
};

export default App;
