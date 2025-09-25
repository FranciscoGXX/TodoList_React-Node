import "../../App.css"
import { Navbar } from "../../components/Template/Navbar/Navbar"
import { Link } from "react-router-dom"



export function Login(){


    return(
        <>
        
        <Navbar></Navbar>

        <div className="main-content d-flex justify-content-center align-items-center">
            <form className="w-25 d-flex flex-column align-center">
                <input type="text" className="form-control" placeholder="UserName" />
                <input type="password" className="form-control my-4" placeholder="Password" />
                <button  type="button" className="btn" style={{backgroundColor:"#e35d10", color:"#FFF"}}>

                    <Link to="/home" style={{textDecoration:"none"}} className="text-light">Log in</Link> 
                    
                </button>
            </form>
        </div>
        </>
    )
}