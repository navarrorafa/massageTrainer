import  {NavBar} from './components/NavBar'
// import {NavBar2} from './components/NavBar2'
import {AppRouter} from "./routes/AppRouter"
import { IconsContacto } from './components/IconsContacto'



function App() {


  return (
    <>
     <header >
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
