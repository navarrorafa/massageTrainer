import {Routes, Route , Navigate} from "react-router-dom"
import {HomePage,Contacto , Masaje , Trainer} from "../pages/index"

export const AppRouter = () => {

  return (

    <Routes>
       
       <Route path="/" element={<HomePage/>} />
       <Route path="/masaje" element={<Masaje/>} />
       <Route path="/trainer" element={<Trainer/>} />
       <Route path="/contacto" element={<Contacto/>}/>

    </Routes>


  )
}
