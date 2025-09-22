
import { useState } from "react"

export function InputTask({AddTask}){


    const [NewTask, SetNewTask]=useState("")

    return(
        <div className="d-flex mb-5 w-50">
            <input onChange={(e)=> SetNewTask(e.target.value)} type="text" className="form-control me-3" value={NewTask} placeholder="Nueva tarea" />

            <button className="btn " style={{backgroundColor:"#e35d10", color:"#103A58"}} onClick={()=>{
                AddTask(NewTask)
                SetNewTask("")
            }}>Agregar</button>
            
        </div>
    )
}