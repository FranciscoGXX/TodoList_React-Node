
import { connection } from "../Db/DB-connection.js";

export async function getUsers(req,res) {
    try {
        const { rows } = await connection.query("SELECT * FROM public.users where deleted = false;");
        res.json(rows)
        return rows;
    } catch (error) {
        return { message: error }
    }
}

export async function createUser(req,res){
    try {
        const {username,password}= req.body;
        const {rows} =connection.query('INSERT INTO public.users (username, "password") VALUES($1, $2 ) RETURNING *;', [username,password])
        res.json(rows)
    } catch (error) {
        res.status(400).json({errorMessage: error})
    }
}



export async function getUserByID(req,res) {
    try {
        const {ID}= req.params
        const { rows } = await connection.query("SELECT * FROM public.users where id=$1 and deleted = false;" ,[ID]);
        res.json(rows)
    } catch (error) {
        return { message: error }
    }
}

export async function deleteUser(req,res) {
    try {
        const { rows } = await connection.query("UPDATE public.users SET deleted=true WHERE id=$0 returning *" [ID]);
        return rows[0];
    } catch (error) {
        return { message: error }
    }
}


