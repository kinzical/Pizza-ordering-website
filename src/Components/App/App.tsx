import React from 'react';
import { AppRoutes } from './AppRoutes';
import { Footer } from './Modules/Shared/Presentations/Footer/Footer';
import { Header } from './Modules/Shared/Presentations/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
        <AppRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
