import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Login } from "./Routes/Login/Login";
import { Home } from "./Routes/Home/Home";
import {Navbar} from "./components/Template/Navbar/Navbar"

function App() {

 

  return(
    <Routes>      

       <Route path="/" element={<Login/>}></Route>

       <Route path="/home" element={<Home/>}></Route>
    </Routes>
  )
}

export default App;

