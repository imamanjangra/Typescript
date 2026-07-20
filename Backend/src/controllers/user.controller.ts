import { Result } from 'pg';
import { pool } from '../db/index.js';
import {UserParams , UserBody} from '../types/user.types.js'
import e, {Request , Response} from "express"

export const CreateUser = async (req : Request<{} , {} , UserBody>, res : Response) : Promise<void> => {
    try {
        const {fullname , email , password} = req.body;

        if(!fullname || !email || !password){
            res.status(404).json({message : "All filed are required "});
            return;
        }

         const exisedUser = await pool.query("select * from users where email = $1" , [email]);

        if(exisedUser.rows.length > 0){
             res.status(400).json({error : "User already exists"});
              return;
        }

        const result = await pool.query<UserBody>(
            `insert into users (fullname , email , password)
            values($1 , $2 , $3) 
            returning *` ,
             [fullname , email , password] 
            
        )
        res.status(200).json({messange : "user create succfully" , user : result.rows[0]});


    } catch (error) {
      if(error instanceof Error){
        console.log(error.message);

        res.status(500).json({message : error.message})
      }else{
        res.status(500).json({error : "unknown errro"})
      }
    }
}

export const getAllUser = async (req : Request , res : Response) : Promise<void> => {
    try {
        const data = await pool.query<UserBody>(`selecr * from users`);

        res.status(200).json({users : data.rows})
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
            res.status(500).json({message : error.message})
        }
        else {
            res.status(500).json({error : "unknown error"});
        }
    }
}

export const UpdateUser = async (req : Request<UserParams , {} , UserBody> , res: Response) => {
try {
    const {id} = req.params;
     
    const {fullname , email} = req.body;

    const result = await pool.query<UserBody>(`update users set fullname = $1 , email = $3 where id = $4  returning *` , [fullname , email , id])

    res.status(200).json({message : "update user" , result : result})
} catch (error) {
    if(error instanceof Error){
        console.log(error);
        res.status(500).json({message : error.message})
    }else{
        res.status(500).json({error : error})
    }
}
}
