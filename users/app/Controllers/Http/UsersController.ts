import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'



export default class UsersController {
    public async create({request}:HttpContextContract){
        const {name,usename} = request.only(["name", "usename"])
        
        const user = await User.create({
            name,
            usename
        });

        return user;
    }

    public async index(){
        const all = await User.all();
        return all
    }
}

