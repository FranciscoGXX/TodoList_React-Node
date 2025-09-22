import "./App.css"
import { Tasklist } from "./components/tasklist/Tasklist";
import { InputTask } from "./components/InputTask/InputTask";
import { Navbar } from "./components/Template/Navbar/Navbar";
import { useState } from "react";

function App() {

  const [task,setTask]=useState([
    {Id : 1 ,Name: "Instalar Docker", Done: true },
    {Id : 2 ,Name: "Instalar dockerDesktop", Done: true },
    {Id : 3 ,Name: "Configurar infraestructura de la app", Done: true },
    {Id : 4 ,Name: "Hacer interfaz", Done: false },
    {Id : 4 ,Name: "Primer endpoint", Done: false }
  ])

  return(
    <>
      <Navbar BGColor></Navbar>

      <div className="main-content d-flex flex-column align-items-center justify-content-center">
        <InputTask AddTask={(TaskName)=>{
          setTask([...task, {Id:task.length+1,Name:TaskName,Done:false}])

        }}></InputTask>
        <Tasklist Tasks={task}/>
      </div>
    </>
  )
}

export default App;