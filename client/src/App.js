import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./features/landingPage/Home"
import Signup from "./features/register/Signup"
import Login from "./features/register/Login"
import Dashboard from "./features/dashboard/Dashboard"
import Update from "./components/Update"



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route index element={<Home/>}/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/axonlink/update-research/:id' element={<Update/>}/>  
    </Routes>
    
    </BrowserRouter>
    
   
  )
}
export default App