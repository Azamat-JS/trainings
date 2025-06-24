import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){}

    async findAll(): Promise<User[]>{
        return await this.userRepo.find()
    }

    async findOne(id:number){
        return await this.userRepo.findOneBy({id})
    }

    async createUser(createUserInput: CreateUserInput){
        const newUser = await this.userRepo.create(createUserInput);
        return await this.userRepo.save(newUser)
    }

    async updateUser(id:number, updateUser: UpdateUserInput){
        const newUser = await this.userRepo.update(id, updateUser)
        if(newUser.affected === 0) throw new NotFoundException("user not fount")
            const findUser = await this.findOne(id)
        return findUser;
    }


    async deleteUser(id:number){
        const deleteUser = await this.userRepo.delete(id)
        if(deleteUser.affected === 0) throw new NotFoundException('user not found')
            return `User with id: ${id} deleted successfully`
    }
}
