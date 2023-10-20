import { Request, Response } from "express"
import { User } from "../models/User"




const getUsers = async(req: Request, res: Response) =>{ 
    //logica del o que yo quiero hacer/devolver
    
    const users = await User.find()

    return res.send('GET USERS')
}

const createUsers = async (req: Request, res: Response) => {
    //logica para crear usuarios
    console.log('create');
    try{
    
    const newUser = await User.create(
        {
            userName: req.body.userName,
            gametag: req.body.gametag
        }
    ).save()

        return res.send(newUser)
    } catch(error) {
        return res.send(error)
    }
    console.log(req.body);

}



const updateUserById = (req: Request, res: Response) => {
    //logica para actualizar usuarios

    const usersId = req.params.id
    
    return res.send('USER ' + usersId + ' UPDATED SUCCESFULLY')
}

const deleteUserById = async(req: Request, res: Response) => {
    //logica para borrar usuarios
    try {

        const userIdToDelete = req.params.id

        const userDeleted =  await User.delete(
            {
                id: parseInt(userIdToDelete)
            }
        )

       
        if (userDeleted.affected){
            return res.send(`The id has been deleted correctly ` + userIdToDelete)
        }
    } catch (error) {
        return res.send(error)
    }

}

const getUserById = (req: Request, res: Response) => {
    //logica para borrar usuarios
    const usersId = req.params.id
    return res.send('USER ' + usersId)
}

export {getUsers, createUsers, updateUserById, deleteUserById, getUserById}