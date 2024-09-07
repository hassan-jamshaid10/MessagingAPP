import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';
import { ThemeProvider as CustomThemeProvider, useTheme } from './ThemeContext/index';
import AppLayout from './AppLayout';
import Home from './Components/HomePage';
// Import other pages or components here if needed
// import Chats from './Components/Chats';
// import Groups from './Components/Groups';
// import Call from './Components/Call';
// import Contacts from './Components/Contacts';
// import Settings from './Components/Settings';

const App = () => {
  const { themeMode } = useTheme();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment and add the routes as needed */}
            {/* <Route path="/chats" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/call" element={<Call />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
};

const AppWithTheme = () => (
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);

export default AppWithTheme;
