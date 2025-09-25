
import { connection } from "../Db/DB-connection.js";

export async function CreateTask(req,res){
    try {
        const {task_name}=req.body
        await connection.query("INSERT INTO public.tasks (task_name) VALUES($1);", [task_name])
        res.json({message: "Tarea agregada exitosamente"})
    } catch (error) {
        res.status(400).json({errorMessage: error})
    }
}


export async  function GetTasks(req,res){
    try {
        const {rows} = await connection.query("select * from public.tasks where deleted= false")
        res.json(rows)
    } catch (error) {
         res.json({errorMessage: error})
    }
}


export async function completeTask(req,res){
    try {
        const {ID}=req.params
        await connection.query("UPDATE public.tasks SET status=true WHERE id_task=$1;",[ID])
        res.json({message: "Tarea completada!!"})
    } catch (error) {
        res.status(400).json({errorMessage: error})
    }
}


export async function deleteTask(req,res){
    try {
        const {ID}=req.params
        await connection.query("UPDATE public.tasks SET deleted=true WHERE id_task=$1;",[ID])
        res.json({message: "Tarea eliminada!!"})
    } catch (error) {
        res.status(400).json({errorMessage: error})
    }
}


