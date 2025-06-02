import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/User';
import {InjectModel} from "@nestjs/mongoose"
import {Model} from 'mongoose'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async createOrFindUser(userData: Partial<User>):Promise<UserDocument>{
        const foundUser = await this.userModel.findOne({email: userData.email})
        if(foundUser) return foundUser;

        const createUser = new this.userModel(userData);
        return createUser.save();
    }

    async findByEmail(email:string):Promise<UserDocument | null>{
        return this.userModel.findOne({email}).exec()
    }
}
