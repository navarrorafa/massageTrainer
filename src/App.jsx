import  {NavBar} from './components/NavBar'
import {AppRouter} from "./routes/AppRouter"
import { IconsContacto } from './components/IconsContacto'

function App() {


  return (
    <>
     <header className='bg-secondary bg-opacity-75'>
      <NavBar/>
     </header>

     <main >
      <AppRouter/>
     </main>

     <footer className='bg-secondary bg-opacity-75'>
      <IconsContacto/>

     </footer>
    </>
  )
}

export default App
