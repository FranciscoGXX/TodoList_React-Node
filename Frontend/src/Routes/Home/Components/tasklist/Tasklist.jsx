import { Task } from "../Task/Task"

export function Tasklist({Tasks=[]}){

    return(
        <div className="w-50">
            <ul>
                {
                  Tasks.map(task=>(
                    <Task TaskName={task.Name} Status={task.Done}  ></Task>
                  ))
                }
            </ul>
        </div>
    )
}
