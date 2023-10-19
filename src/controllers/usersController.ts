import { Request, Response } from "express"




const getUsers = (req: Request, res: Response) =>{ 
    //logica del o que yo quiero hacer/devolver
    
    return res.send('GET USERS')
}

const createUsers = (req: Request, res: Response) => {
    //logica para crear películas
    console.log('create');
    

    console.log(req.body);

    return res.send('USER CREATED SUCCESFULLY')
}



const updateUserById = (req: Request, res: Response) => {
    //logica para actualizar películas

    const usersId = req.params.id
    
    return res.send('USER ' + usersId + ' UPDATED SUCCESFULLY')
}

const deleteUserById = (req: Request, res: Response) => {
    //logica para borrar películas
    
    return res.send('USER DELETED SUCCESFULLY')
}

const getUserById = (req: Request, res: Response) => {
    //logica para borrar películas
    const usersId = req.params.id
    return res.send('USER ' + usersId)
}

export {getUsers, createUsers, updateUserById, deleteUserById, getUserById}