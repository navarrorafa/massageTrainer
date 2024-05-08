import React from 'react';
import { NavBar } from './components/NavBar';
import { AppRouter } from './routes/AppRouter';
import { IconsContacto } from './components/IconsContacto';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className='bg-custom sticky-top'>
        <NavBar />
      </header>

      <main className="flex-grow-1 py-4 mt-5 mb-5">
        <AppRouter />
      </main>

      <footer className='bg-custom bg-opacity-75 fixed-bottom'> {/* Adicionando a classe fixed-bottom */}
        <IconsContacto />
        <a href="https://www.linkedin.com/in/rafarnavarro/" target="_blank" rel="noopener noreferrer" className="d-block text-center text-decoration-none text-black">© Rafael Navarro 2024</a>
      </footer>
    </div>
  );
}

export default App;
