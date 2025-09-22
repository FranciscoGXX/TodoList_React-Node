
export function Task({TaskName, Status}){

    return(

        

        <div className="d-flex justify-content-between my-3 p-2 rounded" style={{border: "1px solid #e35d10"}}>
            <b>{TaskName}</b>
            <div className="d-flex">
                {/* CheckTask */}
                <button className="btn btn-outline-success me-3"><i className="bi bi-check-lg"></i></button>

                {/* DeleteTask */}
                <button className="btn btn-outline-danger"><i className="bi bi-trash3"></i></button>
            </div>
        </div>
    )
}