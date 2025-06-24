import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.enum";


@ObjectType()
@Entity('users')
export class User {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    username: string;

    @Field(() => Role)
    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;

    @Field()
    @Column()
    email: string;

}