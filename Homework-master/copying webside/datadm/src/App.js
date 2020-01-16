import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <div className="App">
     <Header />
     <main className="App-main">
       <Sidebar />
       <Content />
     </main>
     <Footer />
    </div>
  );
}

export default App;
